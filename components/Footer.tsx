
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="FDR Consultoria" className="h-12 w-auto" />
              <span className="font-display font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                FDR <span className="text-primary font-extrabold">CONSULTORIA</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Serviços</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Assessoria Mensal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Assessoria por Edital</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Recursos e Impugnações</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compliance em Licitações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 FDR Consultoria. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">shield</span> LGPD Compliant</span>
            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">lock</span> Transações Seguras</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
