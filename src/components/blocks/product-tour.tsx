import  { useState } from 'react';
import { BarChart2, Check } from 'lucide-react';

export const ProductTour = () => {
  const [volume, setVolume] = useState(350000);
  const [provider, setProvider] = useState('legacy');

  const currentRate = provider === 'legacy' ? 0.018 : 0.011;
  const tensureRate = 0.0048;

  const standardBill = volume * currentRate;
  const tensureBill = volume * tensureRate;
  const yearlySavings = Math.round((standardBill - tensureBill) * 12);
  const percentSaved = Math.round(((currentRate - tensureRate) / currentRate) * 100);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center border-t border-neutral-900">
      <div className="lg:col-span-5 space-y-6">
        <span className="text-violet-400 text-xs font-bold uppercase tracking-widest bg-violet-950/30 border border-violet-900/20 px-3 py-1 rounded-full">
          Cost Architecture
        </span>
        <h2 className="text-3xl font-extrabold text-white">Optimize Infrastructure Capital</h2>
        <p className="text-neutral-400 text-sm leading-relaxed">
          Tensure works directly on underlying telecom networks. By avoiding middleware aggregators, your software stack can escape heavy operational markups completely.
        </p>
        <div className="space-y-3 pt-2">
          {['Direct underlying carrier linkages', 'No passthrough registration premiums'].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
              <span className="p-0.5 rounded bg-violet-950 text-violet-400"><Check className="w-3 h-3" /></span>
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 bg-neutral-900 border border-neutral-850 rounded-2xl p-6 space-y-6 relative">
        <h3 className="text-sm font-bold text-neutral-200 flex items-center gap-2 font-mono">
          <BarChart2 className="w-4 h-4 text-violet-400" /> / pricing_simulator.sh
        </h3>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono text-neutral-400">
            <span>Monthly Executions:</span>
            <span className="text-violet-400 font-bold">{volume.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="10000"
            max="5000000"
            step="10000"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full h-1 bg-neutral-950 rounded-lg appearance-none cursor-pointer accent-violet-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 bg-neutral-950 p-1 rounded-lg border border-neutral-850 text-xs">
          <button
            onClick={() => setProvider('legacy')}
            className={`py-2 rounded font-semibold transition-all ${provider === 'legacy' ? 'bg-neutral-800 text-white' : 'text-neutral-500'}`}
          >
            Legacy Telecom Trunks
          </button>
          <button
            onClick={() => setProvider('reseller')}
            className={`py-2 rounded font-semibold transition-all ${provider === 'reseller' ? 'bg-neutral-800 text-white' : 'text-neutral-500'}`}
          >
            Reseller API Middleware
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-850 font-mono text-center">
          <div className="bg-neutral-950 p-4 rounded-xl border border-violet-500/10">
            <span className="text-[9px] text-violet-300 font-bold block mb-1">ANNUAL VALUE</span>
            <span className="text-xl font-extrabold text-white">${yearlySavings.toLocaleString()}</span>
          </div>
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-850">
            <span className="text-[9px] text-neutral-400 block mb-1">TOTAL REDUCTION</span>
            <span className="text-xl font-extrabold text-emerald-400">-{percentSaved}%</span>
          </div>
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-850">
            <span className="text-[9px] text-neutral-400 block mb-1">UPTIME MATRIX</span>
            <span className="text-xl font-extrabold text-violet-300">99.999%</span>
          </div>
        </div>
      </div>
    </section>
  );
};