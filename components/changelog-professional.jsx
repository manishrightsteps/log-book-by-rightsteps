'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Search, 
  Shield, 
  Mail, 
  Globe, 
  Smartphone, 
  Settings, 
  Bug, 
  AlertTriangle, 
  Zap,
  Users,
  Code,
  Palette,
  BarChart3,
  ChevronDown,
  Filter,
  ArrowUpRight
} from 'lucide-react';
import { parseChangelogContent } from '@/lib/changelog-parser';

// Utility function to render markdown content - SSR safe
const renderMarkdownContent = (text) => {
  if (!text) return text;
  
  // Parse text for formatting without dangerouslySetInnerHTML
  const parts = [];
  let currentIndex = 0;
  
  // Handle bold text **text**
  const boldRegex = /\*\*(.*?)\*\*/g;
  let match;
  
  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the bold
    if (match.index > currentIndex) {
      parts.push(text.slice(currentIndex, match.index));
    }
    // Add the bold text
    parts.push(<strong key={match.index}>{match[1]}</strong>);
    currentIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.slice(currentIndex));
  }
  
  return parts.length > 1 ? <>{parts}</> : text;
};

// Function to group items into tables and regular items - SSR safe
const groupSectionItems = (items) => {
  const groupedItems = [];
  let currentTableRows = [];
  
  items.forEach((item, itemIndex) => {
    if (item.startsWith('|') && item.includes('|')) {
      currentTableRows.push(item);
    } else {
      // If we have accumulated table rows, add them as a table
      if (currentTableRows.length > 0) {
        groupedItems.push({
          type: 'table',
          content: currentTableRows,
          key: `table-${groupedItems.length}`
        });
        currentTableRows = [];
      }
      // Add regular item
      groupedItems.push({
        type: 'item',
        content: item,
        key: `item-${itemIndex}`
      });
    }
  });
  
  // Add any remaining table rows
  if (currentTableRows.length > 0) {
    groupedItems.push({
      type: 'table',
      content: currentTableRows,
      key: `table-${groupedItems.length}`
    });
  }
  
  return groupedItems;
};

// Function to render a complete table from table rows
const renderTable = (tableRows) => {
  if (!tableRows || tableRows.length === 0) return null;
  
  const rows = tableRows.map(row => 
    row.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
  );
  
  if (rows.length === 0) return null;
  
  const headers = rows[0];
  const dataRows = rows.slice(1);
  
  return (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full bg-white border border-zinc-200 rounded-lg shadow-sm">
        <thead className="bg-zinc-50">
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b border-zinc-200 first:rounded-tl-lg last:rounded-tr-lg"
              >
                {renderMarkdownContent(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {dataRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-zinc-50 transition-colors">
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="px-4 py-3 text-sm text-zinc-700 border-r border-zinc-200 last:border-r-0"
                >
                  {renderMarkdownContent(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const iconMap = {
  'Security & Login': Shield,
  'Email & Verification': Mail,
  'Sign-In Options': Globe,
  'Device Management': Smartphone,
  'Improvements': Settings,
  'Fixes': Bug,
  'Heads-Up': AlertTriangle,
  'Design & Interface': Palette,
  'Automation & Workflows': Zap,
  'Analytics & Reporting': BarChart3,
  'Performance & Infrastructure': Settings,
  'Collaboration & Teams': Users,
  'Integrations & API': Code,
  'Mobile & Desktop Apps': Smartphone,
};

const formatDate = (dateString) => {
  if (!dateString) return 'Release date TBD';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    return dateString;
  }
};

export default function ChangelogProfessional({ config, changelogs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [filteredChangelogs, setFilteredChangelogs] = useState([]);
  const [parsedChangelogs, setParsedChangelogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (changelogs && changelogs.length > 0) {
      const parsed = changelogs.map(changelog => ({
        ...changelog,
        parsed: parseChangelogContent(changelog.content)
      }));
      setParsedChangelogs(parsed);
      setSelectedVersion(parsed[0]?.id);
      
      // Expand all sections by default
      const expanded = {};
      parsed.forEach(changelog => {
        changelog.parsed.sections.forEach(section => {
          expanded[`${changelog.id}-${section.title}`] = true;
        });
      });
      setExpandedSections(expanded);
      setIsLoading(false);
    }
  }, [changelogs]);

  useEffect(() => {
    const filtered = parsedChangelogs.filter(changelog => {
      const searchLower = searchTerm.toLowerCase();
      return (
        changelog.version.toLowerCase().includes(searchLower) ||
        changelog.parsed.highlights.toLowerCase().includes(searchLower) ||
        changelog.parsed.sections.some(section =>
          section.title.toLowerCase().includes(searchLower) ||
          section.items.some(item => item.toLowerCase().includes(searchLower))
        )
      );
    });
    setFilteredChangelogs(filtered);
  }, [searchTerm, parsedChangelogs]);

  const toggleSection = (changelogId, sectionTitle) => {
    const key = `${changelogId}-${sectionTitle}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (isLoading || !mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-600 mt-4 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {config.branding.logo && (
                <img 
                  src={config.branding.logo} 
                  alt={config.branding.name}
                  className="h-6 w-auto"
                />
              )}
              <h1 className="text-lg font-semibold text-zinc-900">
                {config.branding.name}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search updates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 w-64 text-sm border border-zinc-300 rounded-md focus:ring-1 bg-white"
                  style={{
                    '--tw-ring-color': config.branding.primaryColor,
                    '--tw-border-opacity': '1'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = config.branding.primaryColor;
                    e.target.style.boxShadow = `0 0 0 1px ${config.branding.primaryColor}`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <Badge variant="outline" className="text-xs text-zinc-600 border-zinc-300">
                {parsedChangelogs.length} releases
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Version Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-zinc-200">
          <button
            onClick={() => setSelectedVersion(null)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selectedVersion === null
                ? 'text-white'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
            style={selectedVersion === null ? { backgroundColor: config.branding.primaryColor } : {}}
          >
            All releases
          </button>
          {filteredChangelogs.map((changelog, index) => (
            <button
              key={changelog.id}
              onClick={() => setSelectedVersion(changelog.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedVersion === changelog.id
                  ? 'text-white'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
              style={selectedVersion === changelog.id ? { backgroundColor: config.branding.primaryColor } : {}}
            >
              v{changelog.version}
              {index === 0 && <span className="ml-2 text-xs">Latest</span>}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {(selectedVersion ? filteredChangelogs.filter(c => c.id === selectedVersion) : filteredChangelogs).map((changelog) => (
            <motion.div
              key={changelog.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Version Header */}
              <div className="pb-6 border-b border-zinc-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-zinc-900 mb-2">
                      {changelog.version}
                    </h2>
                    <div className="flex items-center text-sm text-zinc-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(changelog.date)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {changelog === filteredChangelogs[0] && (
                      <Badge 
                        className="border border-opacity-20"
                        style={{
                          backgroundColor: `${config.branding.primaryColor}15`,
                          color: config.branding.primaryColor,
                          borderColor: config.branding.primaryColor
                        }}
                      >
                        Latest
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-zinc-600 border-zinc-300">
                      {changelog.parsed.sections.length} updates
                    </Badge>
                  </div>
                </div>

                {/* Highlights */}
                {changelog.parsed.highlights && (
                  <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
                    <p className="text-zinc-700 leading-relaxed">
                      {changelog.parsed.highlights}
                    </p>
                  </div>
                )}
              </div>

              {/* Sections */}
              <div className="space-y-4">
                {changelog.parsed.sections.map((section, index) => {
                  const IconComponent = iconMap[section.title] || Settings;
                  const isExpanded = expandedSections[`${changelog.id}-${section.title}`];
                  
                  return (
                    <div key={section.title} className="border border-zinc-200 rounded-lg bg-white">
                      <button
                        onClick={() => toggleSection(changelog.id, section.title)}
                        className="w-full p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-1.5 bg-zinc-100 rounded-md">
                            <IconComponent className="h-4 w-4 text-zinc-600" />
                          </div>
                          <h3 className="font-medium text-zinc-900">{section.title}</h3>
                          <Badge variant="outline" className="text-xs text-zinc-600 border-zinc-300">
                            {section.items.length}
                          </Badge>
                        </div>
                        <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 border-t border-zinc-200">
                              <ul className="space-y-2 mt-3">
{groupSectionItems(section.items).map((group) => {
                                  if (group.type === 'table') {
                                    return (
                                      <li key={group.key} className="list-none">
                                        {renderTable(group.content)}
                                      </li>
                                    );
                                  } else {
                                    return (
                                      <li key={group.key} className="flex items-start text-sm text-zinc-700 leading-relaxed">
                                        <span className="inline-block w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{renderMarkdownContent(group.content)}</span>
                                      </li>
                                    );
                                  }
                                })}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Screenshots */}
              {config.features.showScreenshots && changelog.parsed.screenshots.length > 0 && (
                <div className="border border-zinc-200 rounded-lg bg-white p-6">
                  <h3 className="font-medium text-zinc-900 mb-4">Screenshots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {changelog.parsed.screenshots.map((screenshot, index) => (
                      <div key={index} className="space-y-3">
                        <div className="aspect-video rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50">
                          <img
                            src={screenshot.src}
                            alt={screenshot.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-zinc-600">{screenshot.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}