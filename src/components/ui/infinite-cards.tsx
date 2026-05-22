import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Shield, Globe, Layers } from 'lucide-react';

export const InfiniteMovingCards = () => {
  const engineeringCases = [
    {
      id: 1,
      title: "Mailchimp Integration",
      tag: "STARTUP ARCHITECTURE",
      metric: "Millions of Active Users",
      desc: "Decomposed the acquired Sawa microservices layer and systematically integrated it into Mailchimp's monolith without core delivery lag.",
      icon: Layers
    },
    {
      id: 2,
      title: "FinServ IDP Foundation",
      tag: "PLATFORM ENGINEERING",
      metric: "↓ 74% Provisioning Delay",
      desc: "Constructed secure self-service golden paths on Google Cloud, transforming infrastructure setup loops into automated 5-minute tasks.",
      icon: Cpu
    },
    {
      id: 3,
      title: "Compliance-as-Code Spec",
      tag: "GOVERNANCE SHIELDS",
      metric: "SOC 2 Type II Aligned",
      desc: "Embedded rigorous security guardrails directly into GitOps pipelines to instantly satisfy strict regulatory audits without slowing velocity.",
      icon: Shield
    },
    {
      id: 4,
      title: "Cloud Workload Optimization",
      tag: "INFRASTRUCTURE MODERNIZE",
      metric: "$184k Saved Annually",
      desc: "Conducted continuous delivery auditing, removed cluster compute sprawl, and streamlined scaling parameters under intense user load.",
      icon: Globe
    }
  ];

  const duplicatedCases = [...engineeringCases, ...engineeringCases, ...engineeringCases];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity
        }}
      >
        {duplicatedCases.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={`${item.id}-${idx}`}
              className="w-[310px] sm:w-[350px] shrink-0 border p-6 rounded-2xl flex flex-col justify-between h-64 relative overflow-hidden group shadow-sm backdrop-blur-md transition-all duration-300 hover:border-violet-500/30"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div className="space-y-4 text-left relative z-10">
                <div className="flex items-center justify-between">
                  <span className="p-1.5 rounded-lg border text-violet-600" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-color)' }}>
                    <IconComponent className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {item.tag}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-xs font-bold font-mono tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    {item.title}
                  </h4>
                  <h3 className="text-xl font-black font-mono tracking-tight pt-0.5" style={{ color: 'var(--text-main)' }}>
                    {item.metric}
                  </h3>
                </div>
                
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.desc}
                </p>
              </div>

              <div className="relative pt-3 border-t flex items-center justify-between text-[10px] font-mono" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                <span>Case Study Spec</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-violet-600 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};