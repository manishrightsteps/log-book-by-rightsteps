import matter from 'gray-matter';

export function parseChangelogContent(content) {
  // Extract basic metadata from the header
  const versionMatch = content.match(/\*\*Version:\*\*\s*(\d+\.\d+\.\d+)/);
  const dateMatch = content.match(/\*\*Date:\*\*\s*([^*\n]+)/);
  
  const version = versionMatch ? versionMatch[1] : 'Unknown';
  const date = dateMatch ? dateMatch[1].trim() : 'Unknown';
  
  // Extract overview/highlights
  const overviewMatch = content.match(/## Overview\s*\n(.*?)(?=\n##|$)/s);
  const highlights = overviewMatch ? overviewMatch[1].trim() : '';
  
  // Parse each section with emoji/title
  const parsedSections = [];
  
  // Updated regex to handle sections starting with ## and containing 🎯 or other emojis
  const sectionRegex = /## (.+)\n([\s\S]*?)(?=\n## |$)/g;
  let match;
  
  while ((match = sectionRegex.exec(content)) !== null) {
    const title = match[1].trim();
    const sectionContent = match[2].trim();
    
    // Skip overview and other non-feature sections
    if (title.includes('Overview') || title.includes('Author') || title.includes('Reviewed')) continue;
    
    // Look for subsections within this section
    const subsectionRegex = /### (.+)\n([\s\S]*?)(?=\n###|$)/g;
    let subsectionMatch;
    const subsectionItems = [];
    
    while ((subsectionMatch = subsectionRegex.exec(sectionContent)) !== null) {
      const subsectionTitle = subsectionMatch[1].trim();
      const subsectionContent = subsectionMatch[2].trim();
      
      // Parse items from this subsection - handle various formats
      const items = subsectionContent
        .split('\n')
        .filter(line => {
          const trimmed = line.trim();
          return trimmed.startsWith('- [x]') || 
                 trimmed.startsWith('-') || 
                 trimmed.startsWith('  -') ||
                 (trimmed.startsWith('|') && trimmed.includes('|')); // Table rows
        })
        .map(line => {
          // Handle table rows - preserve formatting but clean up
          if (line.trim().startsWith('|')) {
            return line.trim().replace(/\|\s*/g, '| ').replace(/\s*\|/g, ' |');
          }
          // Remove checkbox and dash, clean up, preserve bold text
          return line
            .replace(/^-\s*\[x\]\s*/, '')
            .replace(/^-\s*/, '')
            .replace(/^\s*-\s*/, '') // Handle indented items
            .trim();
        })
        .filter(item => item && item !== '…' && !item.match(/^-+\s*$/)); // Filter out separator lines
      
      if (items.length > 0) {
        subsectionItems.push({
          title: subsectionTitle,
          items: items
        });
      }
    }
    
    // If we found subsections, add them as separate sections
    if (subsectionItems.length > 0) {
      subsectionItems.forEach(subsection => {
        parsedSections.push({
          title: subsection.title,
          emoji: extractEmoji(subsection.title),
          items: subsection.items
        });
      });
    } else {
      // Otherwise, parse the section directly for items - handle various formats
      const items = sectionContent
        .split('\n')
        .filter(line => {
          const trimmed = line.trim();
          return trimmed.startsWith('- [x]') || 
                 trimmed.startsWith('-') || 
                 trimmed.startsWith('  -') ||
                 (trimmed.startsWith('|') && trimmed.includes('|') && !trimmed.match(/^\|[-\s\|]*\|$/)); // Table rows but not separators
        })
        .map(line => {
          // Handle table rows - preserve formatting but clean up
          if (line.trim().startsWith('|')) {
            return line.trim().replace(/\|\s*/g, '| ').replace(/\s*\|/g, ' |');
          }
          // Remove checkbox and dash, clean up, preserve bold text
          return line
            .replace(/^-\s*\[x\]\s*/, '')
            .replace(/^-\s*/, '')
            .replace(/^\s*-\s*/, '') // Handle indented items
            .trim();
        })
        .filter(item => item && item !== '…' && !item.match(/^-+\s*$/)); // Filter out separator lines
      
      if (items.length > 0) {
        parsedSections.push({
          title,
          emoji: extractEmoji(title),
          items
        });
      }
    }
  }
  
  return {
    version,
    date,
    highlights,
    sections: parsedSections,
    screenshots: [], // Not used in your format
    links: [] // Not used in your format
  };
}

function extractEmoji(title) {
  const emojiMatch = title.match(/([^\w\s])/);
  return emojiMatch ? emojiMatch[1] : '📝';
}

export function getCategoryVariant(title) {
  const lower = title.toLowerCase();
  
  if (lower.includes('security') || lower.includes('login')) return 'destructive';
  if (lower.includes('improvements') || lower.includes('enhancement')) return 'success';
  if (lower.includes('fixes') || lower.includes('bug')) return 'warning';
  if (lower.includes('email') || lower.includes('verification')) return 'info';
  if (lower.includes('device') || lower.includes('management')) return 'secondary';
  if (lower.includes('heads-up') || lower.includes('warning')) return 'warning';
  
  return 'default';
}