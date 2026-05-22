import React from 'react';
import { Globe, Shield, Cpu, ArrowRight } from 'lucide-react';

export const BentoMatrix = () => {
  return (
    <section 
      id="bento-features" 
      className="py-20 px-6 max-w-7xl mx-auto space-y-12 border-t transition-colors duration-300"
      style={{ borderTopColor: 'var(--border-color)' }}
    >
      {/* Header Block */}
      <div className="text-left max-w-2xl space-y-3">
        <span className="text-violet-700 dark:text-violet-400 text-xs font-mono tracking-widest uppercase bg-violet-600/10 border border-violet-500/20 px-3 py-1 rounded-full">
          / architecture_schema.log
        </span>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
          Asymmetric Cloud Topography
        </h2>
      </div>

      {/* Grid Layout Canvas */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Large Feature Block - Platform Performance */}
        <div 
          className="md:col-span-2 border rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full min-h-[240px] shadow-sm backdrop-blur-md transition-colors duration-300"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="space-y-2 text-left">
            <span className="text-violet-700 dark:text-violet-400 text-[10px] font-mono tracking-wider uppercase block">
              CO-CREATION DELIVERY
            </span>
            <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
              Distributed Cluster Micro-Mapping
            </h3>
            <p className="text-xs max-w-md leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Tensure coordinates platform engineering tracks directly with core multi-cloud nodes, accelerating feature rollout speeds while stripping out environmental friction.
            </p>
          </div>

          {/* Real-world telemetry metrics subgrid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2.5 rounded-xl border mt-6 font-mono" style={{ backgroundColor: 'var(--bg-element)', borderColor: 'var(--border-color)' }}>
            {[
              { name: 'GKE Clusters', status: 'Optimized' },
              { name: 'GitOps Paths', status: 'Self-Service' },
              { name: 'Ticket Load', status: '0 Queues' },
              { name: 'MVP Pipeline', status: '8-Weeks' },
            ].map((node, i) => (
              <div key={i} className="p-2 bg-white/40 dark:bg-black/20 rounded-lg border" style={{ borderColor: 'var(--border-color)' }}>
                <span className="text-[9px] block truncate" style={{ color: 'var(--text-muted)' }}>{node.name}</span>
                <span className="text-xs font-black text-violet-700 dark:text-violet-400">{node.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Small Feature Block - Sovereignty Shield */}
        <div 
          className="border rounded-2xl p-6 flex flex-col justify-between min-h-[240px] shadow-sm backdrop-blur-md transition-colors duration-300"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="space-y-2 text-left">
            <span className="text-emerald-700 dark:text-emerald-400 text-[10px] font-mono tracking-wider uppercase block">
              REGULATORY SECURE
            </span>
            <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
              Sovereignty Guardrails
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Standardized Infrastructure-as-Code setups wrapped in embedded security policy modules built to glide through FinServ audits.
            </p>
          </div>
          
          <div className="p-3 rounded-xl font-mono text-[10px] space-y-1.5 text-left border" style={{ backgroundColor: 'var(--bg-element)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
            <p className="text-emerald-700 dark:text-emerald-400 font-medium">✓ PCI-DSS Structural Compliance</p>
            <p className="text-emerald-700 dark:text-emerald-400 font-medium">✓ SOX Audit Automation Matrix</p>
            <p className="text-emerald-700 dark:text-emerald-400 font-medium">✓ FedRAMP Moderate Baselines</p>
          </div>
        </div>

      </div>
    </section>
  );
};