import  { useState } from 'react';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  persona: 'developer' | 'enterprise' | 'scale';
}

export const HeroFunnel = ({ persona }: HeroProps) => {
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [phoneState, setPhoneState] = useState<'idle' | 'dispatching' | 'complete'>('idle');
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState('idle');

  const matrix = {
    developer: {
      tag: "DEVELOPER-FIRST RUNTIME",
      headline: "The infrastructure engine for programmable systems.",
      subheadline: "Deploy secure communication tunnels, real-time message brokers, and autonomous AI dispatch agents using standard declarative configurations.",
      cta: "Initialize Tensure CLI",
    },
    enterprise: {
      tag: "COMPLIANT ENTERPRISE CLOUD",
      headline: "Sovereign communication networks built for scale.",
      subheadline: "Global communication bridges backed by multi-region residency, automatic routing failovers, and unified compliance monitoring controls.",
      cta: "Schedule Architecture Review",
    },
    scale: {
      tag: "ELASTIC NETWORK ARCHITECTURE",
      headline: "Scale message streams without scaling costs.",
      subheadline: "Intelligent routing pipelines that dynamically bypass congested regional networks to lower operational latency and save on infrastructure bills.",
      cta: "Deploy Scaling Blueprint",
    }
  };

  const executeCode = () => {
    if (isCodeRunning) return;
    setIsCodeRunning(true);
    setPhoneState('dispatching');
    setTimeout(() => {
      setPhoneState('complete');
      setIsCodeRunning(false);
    }, 1200);
  };

  return (
    <section className="relative pt-20 px-4 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-900/40 text-xs font-semibold text-violet-400">
          <Sparkles className="w-3.5 h-3.5" />
          {matrix[persona].tag}
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
          {matrix[persona].headline}
        </h1>
        <p className="text-neutral-400 text-lg">{matrix[persona].subheadline}</p>
        
        <form onSubmit={(e) => { e.preventDefault(); setFormStatus('success'); }} className="flex gap-2 max-w-md">
          <input 
            type="email" 
            placeholder="Enter enterprise email..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg text-xs p-3 outline-none focus:border-violet-500"
            required 
          />
          <button className="px-5 py-3 bg-violet-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-violet-500">
            {formStatus === 'success' ? 'Tokens Active!' : matrix[persona].cta}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* Terminal Block */}
      <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl p-4">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
          <span className="text-xs font-mono text-neutral-400 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-violet-400" /> tensure.yaml
          </span>
          <button onClick={executeCode} className="px-3 py-1 bg-neutral-100 text-neutral-950 font-bold text-[10px] rounded">
            {isCodeRunning ? 'Deploying...' : 'Deploy Blueprint'}
          </button>
        </div>
        <div className="font-mono text-xs text-neutral-400 min-h-[140px]">
          <p className="text-purple-400">version: <span className="text-emerald-400">"v1alpha"</span></p>
          <p className="text-blue-400">type: <span className="text-emerald-400">"TensureOrchestrator"</span></p>
          <p className="text-violet-400">spec:</p>
          <p className="pl-4">routingPolicy: <span className="text-emerald-400">"lowest-latency-first"</span></p>
          <p className="pl-4">overheadBenchmark: <span className="text-violet-400">8ms</span></p>
        </div>
        
        {/* Simple Simulated Smartphone Frame for Output visualization */}
        <div className="mt-4 pt-4 border-t border-neutral-800 flex justify-center">
          <div className="w-64 bg-neutral-950 p-3 rounded-xl border border-neutral-850 text-[11px] text-center">
            {phoneState === 'idle' && <span className="text-neutral-600 font-mono">Awaiting Pipeline Activation...</span>}
            {phoneState === 'dispatching' && <span className="text-violet-400 font-mono animate-pulse">Routing packets down edge...</span>}
            {phoneState === 'complete' && (
              <div className="text-left text-emerald-400 font-mono text-[10px]">
                <p className="font-bold">✓ Tensure Node Dispatched</p>
                <p className="text-neutral-450 text-[9px] mt-0.5">Payload received successfully over premium fiber trunk.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};