'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Github, 
  Zap, 
  Palette, 
  Search, 
  Smartphone, 
  Globe, 
  Code,
  CheckCircle,
  Play,
  ExternalLink
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Deploy in minutes with our simple configuration system."
  },
  {
    icon: Palette,
    title: "Clean Design",
    description: "Professional UI that works with any brand or product."
  },
  {
    icon: Search,
    title: "Search Functionality",
    description: "Built-in search helps users find specific updates quickly."
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Responsive design that looks great on all devices."
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Simple markdown files and git-based workflow."
  },
  {
    icon: Globe,
    title: "Easy Hosting",
    description: "Deploy to Vercel, Netlify, or any static hosting provider."
  }
];

export default function LandingClean() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black">
        {/* Static version without animations for SSR */}
        <nav className="border-b border-zinc-800 bg-black sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm"></div>
                </div>
                <h1 className="text-xl font-semibold text-white">ChangelogCraft</h1>
              </div>
              <div className="flex items-center space-x-6">
                <a href="/" className="text-zinc-400 hover:text-white text-sm font-medium">Demo</a>
                <a href="https://github.com/yourusername/changelogcraft" className="flex items-center space-x-2 text-zinc-400 hover:text-white text-sm font-medium" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Static Hero Section */}
        <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="mb-6 bg-zinc-900 text-zinc-300 border border-zinc-800 px-3 py-1 text-sm">
                Professional changelog platform
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Professional changelogs
                <br />
                for your product
              </h1>
              
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Create beautiful changelog pages that your users will actually read. 
                Simple setup, clean design, zero maintenance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  <Play className="h-4 w-4 mr-2" />
                  View Demo
                </a>
                
                <a
                  href="https://vercel.com/new/clone?repository-url=https://github.com/yourusername/changelogcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-lg hover:bg-zinc-900 transition-colors"
                >
                  Deploy on Vercel
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Static Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Built for modern teams
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                Everything you need to create professional changelogs that your users will love to read.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Static workflow and remaining sections would continue here */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Deploy your professional changelog in under 5 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://vercel.com/new/clone?repository-url=https://github.com/yourusername/changelogcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Deploy for Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
              
              <a
                href="https://github.com/yourusername/changelogcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-200"
              >
                <Github className="h-5 w-5 mr-2" />
                View Source
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-sm"></div>
                </div>
                <span className="font-semibold text-white">ChangelogCraft</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-zinc-400">
                <a href="/" className="hover:text-white">Demo</a>
                <a href="https://github.com/yourusername/changelogcraft" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
                <a href="https://vercel.com/new/clone?repository-url=https://github.com/yourusername/changelogcraft" target="_blank" rel="noopener noreferrer" className="hover:text-white">Deploy</a>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
              <p className="text-zinc-500 text-sm">
                Built for developers who want professional changelogs without the complexity.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-zinc-800 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <h1 className="text-xl font-semibold text-white">ChangelogCraft</h1>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="/" 
                className="text-zinc-400 hover:text-white text-sm font-medium"
              >
                Demo
              </a>
              <a 
                href="https://github.com/yourusername/changelogcraft" 
                className="flex items-center space-x-2 text-zinc-400 hover:text-white text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-6 bg-zinc-900 text-zinc-300 border border-zinc-800 px-3 py-1 text-sm">
              Professional changelog platform
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Professional changelogs
              <br />
              for your product
            </h1>
            
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Create beautiful changelog pages that your users will actually read. 
              Simple setup, clean design, zero maintenance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-colors"
              >
                <Play className="h-4 w-4 mr-2" />
                View Demo
              </a>
              
              <a
                href="https://vercel.com/new/clone?repository-url=https://github.com/yourusername/changelogcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-lg hover:bg-zinc-900 transition-colors"
              >
                Deploy on Vercel
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Built for modern teams
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to create professional changelogs that your users will love to read.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300 h-full">
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <feature.icon className="h-6 w-6 text-black" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Simple workflow
              </h2>
              <div className="space-y-8">
                {[
                  {
                    number: 1,
                    title: "Deploy the template",
                    description: "One-click deploy to Vercel or your preferred hosting platform."
                  },
                  {
                    number: 2,
                    title: "Configure your brand",
                    description: "Update the config file with your colors, logo, and product name."
                  },
                  {
                    number: 3,
                    title: "Add your changelogs",
                    description: "Create markdown files for each release. That's it."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
                    <motion.div 
                      className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.number}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 text-lg group-hover:text-zinc-100 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 rounded-xl p-8 text-white border border-zinc-800 shadow-2xl"
            >
              <div className="flex items-center space-x-2 mb-6">
                <motion.div 
                  className="w-3 h-3 bg-red-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-3 h-3 bg-yellow-500 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="text-zinc-400 text-sm ml-2">terminal</span>
              </div>
              <div className="space-y-3 text-sm font-mono">
                <motion.div 
                  className="text-green-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  $ git add public/markdowns/v2.1.0.md
                </motion.div>
                <motion.div 
                  className="text-green-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  $ git commit -m "Add v2.1.0 changelog"
                </motion.div>
                <motion.div 
                  className="text-green-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  $ git push
                </motion.div>
                <motion.div 
                  className="text-zinc-400 mt-4 flex items-center space-x-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    ✓
                  </motion.span>
                  <span>Deployed automatically</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Deploy your professional changelog in under 5 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="https://vercel.com/new/clone?repository-url=https://github.com/yourusername/changelogcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Deploy for Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </motion.a>
              
              <motion.a
                href="https://github.com/yourusername/changelogcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Github className="h-5 w-5 mr-2" />
                View Source
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-sm"></div>
              </div>
              <span className="font-semibold text-white">ChangelogCraft</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-zinc-400">
              <a href="/" className="hover:text-white">Demo</a>
              <a href="https://github.com/yourusername/changelogcraft" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
              <a href="https://vercel.com/new/clone?repository-url=https://github.com/yourusername/changelogcraft" target="_blank" rel="noopener noreferrer" className="hover:text-white">Deploy</a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
            <p className="text-zinc-500 text-sm">
              Built for developers who want professional changelogs without the complexity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}