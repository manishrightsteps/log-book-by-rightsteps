"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Code,
  BarChart3,
  Filter,
  Search,
  ArrowUpRight,
  MessageSquare,
  UserCheck,
  Image as ImageIcon,
  Bell,
  Activity
} from "lucide-react";
import { apiReference } from "@/lib/rightsteps_api_reference";

// Map each service to an icon and color
const serviceConfig = {
  Health: { icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50" },
  Auth: { icon: Shield, color: "text-emerald-600", bg: "bg-emerald-50" },
  Profile: { icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
  Community: { icon: UserCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
  Friends: { icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
  Chat: { icon: MessageSquare, color: "text-emerald-600", bg: "bg-emerald-50" },
  Posts: { icon: Code, color: "text-emerald-600", bg: "bg-emerald-50" },
  Media: { icon: ImageIcon, color: "text-emerald-600", bg: "bg-emerald-50" },
  Notifications: { icon: Bell, color: "text-emerald-600", bg: "bg-emerald-50" },
};

// Method colors
const methodColors = {
  GET: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  POST: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  PUT: { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
  PATCH: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  DELETE: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
};

function StatCard({ title, value, serviceConfig }) {
  const { icon: Icon, color, bg } = serviceConfig;
  
  return (
    <Card className="group bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-emerald-50/30">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="space-y-1">
          <CardTitle className="text-sm font-semibold text-emerald-700/80 uppercase tracking-wide">{title}</CardTitle>
          <div className="text-3xl font-bold text-emerald-600">{value}</div>
        </div>
        <div className={`p-3 rounded-xl ${bg} ring-1 ring-emerald-200/50 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
      </CardHeader>
    </Card>
  );
}

function Toolbar({ services, activeService, setActiveService, search, setSearch, method, setMethod, showOnlyPublished, setShowOnlyPublished }) {
  const methods = ["ALL", "GET", "POST", "PUT", "PATCH", "DELETE"];
  
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-200/50">
      <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search APIs by name, endpoint, description..."
            className="w-full pl-12 pr-4 py-3 border-2 border-emerald-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-500 bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-colors shadow-sm"
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3 bg-emerald-50/50 px-4 py-2 rounded-xl">
            <Filter className="h-4 w-4 text-emerald-600" />
            <select
              value={activeService}
              onChange={(e) => setActiveService(e.target.value)}
              className="border-2 border-emerald-200 rounded-lg text-sm px-3 py-2 text-zinc-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 shadow-sm"
            >
              <option value="ALL">All Services</option>
              {Object.keys(services).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="border-2 border-emerald-200 rounded-lg text-sm px-3 py-2 text-zinc-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 shadow-sm"
          >
            {methods.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          
          <label className="flex items-center gap-3 text-sm text-emerald-700 select-none bg-emerald-50/50 px-4 py-2 rounded-xl">
            <input 
              type="checkbox" 
              checked={showOnlyPublished} 
              onChange={(e) => setShowOnlyPublished(e.target.checked)}
              className="w-4 h-4 text-emerald-600 border-emerald-300 rounded focus:ring-emerald-500"
            />
            <span className="font-medium">Published Only</span>
          </label>
          
          <button
            onClick={() => downloadJson(apiReference)}
            className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl px-4 py-2 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
          >
            Export JSON <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function downloadJson(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "rightsteps_api_reference.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function ApiRow({ service, api }) {
  const config = serviceConfig[service] || serviceConfig.Health;
  const methodColor = methodColors[api.method] || methodColors.GET;
  
  return (
    <tr className="hover:bg-emerald-50/30 transition-all duration-200 group">
      <td className="px-6 py-4 text-sm">
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-xl ${config.bg} ring-1 ring-emerald-200/50 group-hover:scale-105 transition-transform duration-200`}>
            <config.icon className={`h-4 w-4 ${config.color}`} />
          </div>
          <span className="font-semibold text-zinc-800">{service}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm">
        <div className="flex items-center gap-4">
          <Badge 
            className={`${methodColor.bg} ${methodColor.text} ${methodColor.border} border text-xs font-bold px-3 py-1 rounded-lg shadow-sm`}
          >
            {api.method}
          </Badge>
          <span className="text-zinc-800 font-semibold">{api.name}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <code className="font-mono text-xs bg-gradient-to-r from-zinc-100 to-zinc-50 px-3 py-2 rounded-lg text-zinc-800 border border-zinc-200/50 shadow-sm">
          {api.endpoint}
        </code>
      </td>
      <td className="px-6 py-4 text-sm text-zinc-600 leading-relaxed">{api.description}</td>
      <td className="px-6 py-4 text-center">
        {api.published ? (
          <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 px-3 py-1 rounded-lg shadow-md font-medium">
            ✓ Live
          </Badge>
        ) : (
          <Badge variant="outline" className="border-orange-300 text-orange-600 bg-orange-50 px-3 py-1 rounded-lg">
            Draft
          </Badge>
        )}
      </td>
    </tr>
  );
}

function ApiTable({ items }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-200/50 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gradient-to-r from-emerald-600 to-emerald-700">
            <tr className="text-left text-xs uppercase tracking-wider text-white font-bold">
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">API Endpoint</th>
              <th className="px-6 py-4">URL</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100/50">
            {items.map(({ service, api }, i) => (
              <ApiRow key={`${service}-${api.name}-${i}`} service={service} api={api} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ApiReferencePage() {
  const [activeService, setActiveService] = useState("ALL");
  const [search, setSearch] = useState("");
  const [method, setMethod] = useState("ALL");
  const [showOnlyPublished, setShowOnlyPublished] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate dynamic summary from the API reference data
  const summary = useMemo(() => {
    const counts = {};
    let total = 0;
    
    Object.entries(apiReference).forEach(([service, endpoints]) => {
      counts[service] = endpoints.length;
      total += endpoints.length;
    });
    
    return { ...counts, Total: total };
  }, []);

  // Flatten APIs for filtering
  const flatApis = useMemo(() => {
    const rows = [];
    Object.entries(apiReference).forEach(([service, endpoints]) => {
      endpoints.forEach((api) => rows.push({ service, api }));
    });
    return rows;
  }, []);

  // Filter APIs based on current filters
  const filteredApis = useMemo(() => {
    const query = search.trim().toLowerCase();
    return flatApis.filter(({ service, api }) => {
      if (activeService !== "ALL" && service !== activeService) return false;
      if (method !== "ALL" && api.method !== method) return false;
      if (showOnlyPublished && !api.published) return false;
      
      if (!query) return true;
      
      const searchText = `${service} ${api.name} ${api.endpoint} ${api.description}`.toLowerCase();
      return searchText.includes(query);
    });
  }, [activeService, method, search, showOnlyPublished, flatApis]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-emerald-600 font-medium">Loading API Reference...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl"></div>
                <Image 
                  src="/logo.png" 
                  alt="RightSteps" 
                  width={64}
                  height={64}
                  className="relative w-auto drop-shadow-lg"
                />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                  RightSteps Community API
                </h1>
                <p className="text-emerald-600 mt-2 text-lg font-medium">Comprehensive API reference documentation</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-6">
              <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 text-sm px-4 py-2 rounded-xl shadow-lg font-semibold">
                {summary.Total} Endpoints
              </Badge>
              <Badge className="bg-white/80 backdrop-blur-sm text-emerald-700 border border-emerald-300 text-sm px-4 py-2 rounded-xl shadow-md font-semibold">
                {Object.keys(apiReference).length} Services
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {Object.entries(summary)
            .filter(([key]) => key !== "Total")
            .map(([service, count]) => (
              <StatCard 
                key={service} 
                title={service} 
                value={count} 
                serviceConfig={serviceConfig[service] || serviceConfig.Health}
              />
            ))}
          <StatCard 
            title="Total APIs" 
            value={summary.Total} 
            serviceConfig={{ icon: BarChart3, color: "text-emerald-600", bg: "bg-emerald-50" }}
          />
        </motion.div>

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Toolbar
            services={apiReference}
            activeService={activeService}
            setActiveService={setActiveService}
            search={search}
            setSearch={setSearch}
            method={method}
            setMethod={setMethod}
            showOnlyPublished={showOnlyPublished}
            setShowOnlyPublished={setShowOnlyPublished}
          />
        </motion.div>

        {/* Results Count */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-emerald-700 bg-gradient-to-r from-emerald-50 to-green-50 px-6 py-3 rounded-xl border border-emerald-200 shadow-sm"
        >
          Showing <span className="font-bold text-emerald-800 text-base">{filteredApis.length}</span> of <span className="font-semibold">{summary.Total}</span> API endpoints
        </motion.div>

        {/* API Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ApiTable items={filteredApis} />
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-emerald-600 border-t border-emerald-200 pt-6"
        >
          <p>
            Built with ❤️ by the RightSteps team • Last updated: {mounted ? new Date().toLocaleDateString() : 'Loading...'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}