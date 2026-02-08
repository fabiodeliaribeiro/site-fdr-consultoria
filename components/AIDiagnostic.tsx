import React, { useState } from 'react';
import { getDiagnosticFromN8N } from '../services/n8nService';

const AIDiagnostic: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const result = await getDiagnosticFromN8N(input);
      setResponse(result);
    } catch (err) {
      console.error(err);
      setResponse("Erro ao obter diagnóstico. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="diagnostico-ai" className="py-24 bg-white dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background-light dark:bg-background-dark rounded-3xl p-8 md:p-12 shadow-inner border border-gray-100 dark:border-gray-800">
          <div className="text-center mb-10">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Tecnologia de Ponta</h2>
            <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Diagnóstico Instantâneo por IA
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Descreva seu desafio em licitações e nossa IA treinada analisará seu cenário imediatamente.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <textarea
              className="w-full rounded-2xl border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark text-gray-900 dark:text-white p-6 focus:ring-primary focus:border-primary min-h-[150px] shadow-sm text-lg"
              placeholder="Ex: Minha empresa vende material de escritório em SP, mas sempre perdemos por documentação técnica..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              disabled={loading}
              type="submit"
              className={`w-full py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all ${loading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/20 hover:-translate-y-1'
                }`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Processando com IA...
                </>
              ) : (
                <>
                  <span className="material-icons-outlined">psychology</span>
                  Gerar Diagnóstico Grátis
                </>
              )}
            </button>
          </form>

          {response && (
            <div className="mt-12 p-8 bg-white dark:bg-surface-dark rounded-2xl border-l-8 border-primary shadow-lg animate-fade-in-up">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="material-icons-outlined text-primary">auto_awesome</span>
                  Análise Estratégica
                </h4>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">AI Powered</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {response}
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="https://wa.me/5567999491952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline bg-primary/5 px-6 py-3 rounded-full"
                >
                  Falar com o consultor IA
                  <span className="material-icons-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIDiagnostic;
