
import React from 'react';
import { SEGMENTS } from '../constants';

const Segments: React.FC = () => {
  return (
    <section id="segmentos" className="py-24 bg-surface-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Segmentos</h2>
          <h3 className="text-4xl font-display font-bold text-white mb-6">Áreas de Atuação</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nossa expertise multissetorial permite que empresas de diversos nichos vençam grandes contratos governamentais.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {SEGMENTS.map((segment, idx) => (
            <div 
              key={idx}
              className="group bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 text-center cursor-default"
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined text-5xl text-primary">{segment.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-white">{segment.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
