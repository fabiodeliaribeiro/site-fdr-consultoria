
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import AIDiagnostic from './components/AIDiagnostic';
import Segments from './components/Segments';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [initialMessage, setInitialMessage] = React.useState('');

  // Check system dark mode preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleServiceSelect = (serviceTitle: string) => {
    const message = `Olá, tenho interesse no serviço de ${serviceTitle}. Gostaria de mais informações.`;
    setInitialMessage(message);

    // Scroll to contact form
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid onSelectService={handleServiceSelect} />
        <AIDiagnostic />
        <Segments />

        {/* About Section Teaser */}
        <section id="sobre-nos" className="py-24 bg-white dark:bg-surface-dark overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <img
                  src="/cristo-redentor.jpg"
                  alt="Escritório FDR"
                  className="rounded-[40px] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl shadow-xl z-20 text-white">
                  <p className="text-4xl font-extrabold">+12</p>
                  <p className="text-xs uppercase font-bold tracking-widest opacity-80">Anos de Experiência</p>
                </div>
              </div>
              <div>
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Quem Somos</h2>
                <h3 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Liderança e Estratégia no <br /> Setor Público
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  A FDR Consultoria nasceu para elevar o padrão de excelência nas relações entre o setor privado e a administração pública.
                  Não apenas participamos de processos; nós desenhamos o caminho para a vitória, garantindo compliance e máxima eficiência.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-primary">
                      <span className="material-icons-outlined">psychology</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Inteligência Estratégica</h4>
                      <p className="text-gray-500 dark:text-gray-400">Análise profunda de editais para identificar brechas e oportunidades.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-primary">
                      <span className="material-icons-outlined">gavel</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Rigor Jurídico</h4>
                      <p className="text-gray-500 dark:text-gray-400">Nossa equipe de especialistas garante 100% de conformidade documental.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-primary">
                      <span className="material-icons-outlined">visibility</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Lisura e Transparência</h4>
                      <p className="text-gray-500 dark:text-gray-400">Processos claros e auditáveis, garantindo a integridade em cada etapa.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm initialMessage={initialMessage} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
