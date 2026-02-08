
import React from 'react';
import { SERVICES } from '../constants';

const ServicesGrid: React.FC = () => {
  const scrollToContact = (serviceTitle: string) => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Opcional: pré-preencher o assunto no futuro
      console.log(`Interesse no serviço: ${serviceTitle}`);
    }
  };

  return (
    <section id="solucoes" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Nossos Serviços</h2>
          <h3 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Soluções Estratégicas Ponta a Ponta
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Combinamos expertise jurídica com inteligência de mercado para garantir que cada edital seja uma vitória em potencial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col p-8"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <span className="material-icons-outlined text-4xl text-primary group-hover:text-white">
                  {service.icon}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {service.description}
              </p>
              
              <div className="mb-8 p-4 bg-gray-50 dark:bg-background-dark rounded-xl">
                <span className="text-[10px] uppercase font-bold text-primary block mb-2 tracking-widest">Público Alvo</span>
                <p className="text-sm font-semibold">{service.forWhom}</p>
              </div>

              <ul className="space-y-3 mb-10">
                {service.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="material-icons-outlined text-primary text-lg">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => scrollToContact(service.title)}
                className="w-full py-4 border-2 border-primary text-primary font-bold rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 active:scale-95"
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
