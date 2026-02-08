
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    segment: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Por favor, preencha pelo menos o nome e email.");
      return;
    }

    setIsSubmitting(true);

    // Simulando envio de API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', segment: '', message: '' });

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-surface-dark rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="grid md:grid-cols-12 min-h-[700px]">
            {/* Sidebar */}
            <div className="md:col-span-5 bg-primary p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>

              <div className="relative z-10">
                <h3 className="text-4xl font-display font-bold mb-6">Pronto para vencer?</h3>
                <p className="text-orange-100 text-lg mb-12">
                  Agende um diagnóstico consultivo com um de nossos especialistas e descubra o caminho para o faturamento público.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                      <span className="material-icons-outlined">email</span>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold opacity-60">Email</p>
                      <p className="text-lg font-semibold">contato@fdrconsultoria.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                      <span className="material-icons-outlined">phone</span>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold opacity-60">WhatsApp</p>
                      <p className="text-lg font-semibold">(67) 99949-1952</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                      <span className="material-icons-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold opacity-60">Localização</p>
                      <p className="text-lg font-semibold">Campo Grande, MS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/20 flex gap-6 opacity-60 hover:opacity-100 transition-opacity">
                <a href="#" className="hover:scale-110 transition-transform"><span className="material-icons-outlined">public</span></a>
                <a href="#" className="hover:scale-110 transition-transform"><span className="material-icons-outlined">business</span></a>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-7 p-12 lg:p-16 flex flex-col justify-center">
              {isSuccess ? (
                <div className="text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-icons-outlined text-5xl">check_circle</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Mensagem Enviada!</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                    Recebemos seus dados. Um de nossos consultores entrará em contato em até 24 horas úteis.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-widest" htmlFor="name">Nome Completo</label>
                      <input
                        required
                        className="w-full h-14 px-5 rounded-xl border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-background-dark text-gray-900 dark:text-white focus:ring-primary focus:border-primary transition-all"
                        id="name"
                        placeholder="Seu nome"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-widest" htmlFor="email">Email Corporativo</label>
                      <input
                        required
                        className="w-full h-14 px-5 rounded-xl border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-background-dark text-gray-900 dark:text-white focus:ring-primary focus:border-primary transition-all"
                        id="email"
                        placeholder="seu@email.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-widest" htmlFor="segments">Segmento da Empresa</label>
                    <select
                      className="w-full h-14 px-5 rounded-xl border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-background-dark text-gray-900 dark:text-white focus:ring-primary focus:border-primary transition-all"
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                    >
                      <option value="">Selecione um segmento</option>
                      <option value="Saude">Saúde</option>
                      <option value="Obras">Obras / Engenharia</option>
                      <option value="TI">TI / Softwares</option>
                      <option value="Servicos">Serviços / Mão de Obra</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-widest" htmlFor="message">Como podemos ajudar?</label>
                    <textarea
                      className="w-full px-5 py-4 rounded-xl border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-background-dark text-gray-900 dark:text-white focus:ring-primary focus:border-primary transition-all min-h-[120px]"
                      id="message"
                      placeholder="Conte-nos sobre sua necessidade..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    disabled={isSubmitting}
                    className={`w-full py-5 font-extrabold text-xl rounded-2xl transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-primary dark:hover:bg-primary dark:hover:text-white'
                      }`}
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Enviando...
                      </>
                    ) : 'Enviar Mensagem'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
