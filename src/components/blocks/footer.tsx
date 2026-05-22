import React from 'react';
import { Layers, Globe, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-24 pb-12 px-6 sm:px-12 text-xs text-neutral-400 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-12 border-b border-neutral-900 pb-16">
        
        {/* Core Description Segment */}
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-lg text-white">Tensure<span className="text-violet-500">.</span></span>
          </div>
          <p className="text-neutral-500 leading-relaxed max-w-xs text-[13px]">
            Declarative runtime engines built to orchestrate and automate secure transactional communication pipelines globally.
          </p>
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-850 rounded-full px-3.5 py-1 text-[10px] text-neutral-300 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>99.999% SLA Resiliency Verified</span>
          </div>
        </div>

        {/* Directory Links */}
        <div className="space-y-3">
          <span className="text-neutral-200 font-bold tracking-wider uppercase text-[10px] block">Runtime API</span>
          <ul className="space-y-2.5 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Edge Orchestrator</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MFA Token Gateway</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Elastic Streams</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Direct Trunks</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <span className="text-neutral-200 font-bold tracking-wider uppercase text-[10px] block">Resources</span>
          <ul className="space-y-2.5 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">YAML Blueprint Spec</a></li>
            <li><a href="#" className="hover:text-white transition-colors">TypeScript Client SDK</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Python Core Wheels</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Incident Logs</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <span className="text-neutral-200 font-bold tracking-wider uppercase text-[10px] block">Compliance</span>
          <ul className="space-y-2.5 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Trust Center Portal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SOC 2 Type II Reports</a></li>
            <li><a href="#" className="hover:text-white transition-colors">HIPAA Secure Vaults</a></li>
            <li><a href="#" className="hover:text-white transition-colors">EU Data Residency</a></li>
          </ul>
        </div>

        {/* Marketing Action Box */}
        <div className="space-y-4 col-span-2 md:col-span-1">
          <span className="text-neutral-200 font-bold tracking-wider uppercase text-[10px] block">Scale Architecture</span>
          <p className="text-[11px] text-neutral-500 leading-normal">
            Connect your staging cluster to specialized enterprise validation tunnels.
          </p>
          <a href="/contact/sales" className="h-10 w-full bg-neutral-900 hover:bg-neutral-850 text-white font-bold rounded border border-neutral-800 flex items-center justify-center gap-1.5 transition-colors">
            Contact Sales
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 text-center text-neutral-600 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono">
        <span>© 2026 Tensure Systems, Inc. All rights reserved. Operating under US Telecom license 24-B.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Charter</a>
          <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Operations</a>
        </div>
      </div>
    </footer>
  );
};