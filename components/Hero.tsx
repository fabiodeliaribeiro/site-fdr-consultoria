
import React from 'react';
import { STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700/50 mb-8 animate-bounce">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
          <span className="text-xs font-bold text-orange-800 dark:text-orange-300 uppercase tracking-widest">Especialistas em Licitações</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-8">
          Transformamos oportunidades <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">públicas</span> em lucros <span className="text-gray-400 dark:text-gray-600">privados</span>
        </h1>

        <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Desbloqueie o potencial do mercado governamental com a FDR Consultoria. Eliminamos a burocracia e aumentamos drasticamente suas chances de vitória.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full text-white bg-primary hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 hover:-translate-y-1"
          >
            <span className="material-icons-outlined mr-2">chat</span>
            Falar com Especialista
          </a>
          <a
            href="#diagnostico-ai"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full text-gray-700 dark:text-white bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-xl"
          >
            <span className="material-icons-outlined mr-2">analytics</span>
            Diagnóstico IA Grátis
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-12">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <span className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
