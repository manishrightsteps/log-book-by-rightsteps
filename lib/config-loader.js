import fs from 'fs';
import path from 'path';

export function loadConfig() {
  try {
    const configPath = path.join(process.cwd(), 'changelog.config.json');
    const configFile = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(configFile);
  } catch (error) {
    console.warn('Could not load config file, using defaults:', error.message);
    return getDefaultConfig();
  }
}

export function loadAllChangelogs() {
  try {
    const markdownsDir = path.join(process.cwd(), 'public', 'markdowns');
    const files = fs.readdirSync(markdownsDir);
    
    const changelogs = files
      .filter(file => file.endsWith('.md') && !file.includes('template'))
      .map(file => {
        const filePath = path.join(markdownsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const fileName = path.basename(file, '.md');
        
        // Extract version from filename or content
        const versionMatch = fileName.match(/v?(\d+\.\d+\.\d+)/) || 
                           content.match(/# Release Notes – v(\d+\.\d+\.\d+)/);
        const version = versionMatch ? versionMatch[1] : fileName;
        
        // Extract date from content
        const dateMatch = content.match(/\((\d{4}-\d{2}-\d{2})\)/);
        const date = dateMatch ? dateMatch[1] : null;
        
        return {
          id: fileName,
          version,
          date,
          content,
          fileName: file
        };
      })
      .sort((a, b) => {
        // Sort by date (newest first), then by version
        if (a.date && b.date) {
          return new Date(b.date) - new Date(a.date);
        }
        return b.version.localeCompare(a.version, undefined, { numeric: true });
      });
    
    return changelogs;
  } catch (error) {
    console.error('Could not load changelog files:', error.message);
    return [];
  }
}

export function loadChangelog() {
  try {
    const changelogPath = path.join(process.cwd(), 'public', 'markdowns', 'change-logs.md');
    return fs.readFileSync(changelogPath, 'utf8');
  } catch (error) {
    console.error('Could not load changelog file:', error.message);
    return null;
  }
}

function getDefaultConfig() {
  return {
    branding: {
      name: "Logbooks",
      logo: "/logo.svg",
      primaryColor: "#3b82f6",
      secondaryColor: "#1e40af",
      textColor: "#1f2937",
      backgroundColor: "#ffffff",
      accentColor: "#10b981"
    },
    layout: {
      maxWidth: "1200px",
      padding: "2rem",
      borderRadius: "12px",
      shadow: "lg"
    },
    typography: {
      headingFont: "Inter",
      bodyFont: "Inter",
      codeFont: "JetBrains Mono"
    },
    features: {
      showScreenshots: true,
      showLinks: true,
      enableAnimations: true,
      darkMode: true,
      searchEnabled: true
    },
    metadata: {
      title: "Changelog",
      description: "Stay updated with the latest features and improvements",
      url: "https://yoursite.com/changelog"
    }
  };
}