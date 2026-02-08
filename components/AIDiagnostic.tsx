
import React, { useState, useEffect } from 'react';
import { getDiagnosticResponse } from '../services/geminiService';

const AIDiagnostic: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [needsKey, setNeedsKey] = useState(false);

  // Verifica se o ambiente requer seleção de chave
  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setNeedsKey(!hasKey);
      }
    };
    checkKey();
  }, []);

  const handleOpenKeySelector = async () => {
    if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
      await window.aistudio.openSelectKey();
      // Assume sucesso conforme as diretrizes para evitar race conditions
      setNeedsKey(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    
    try {
      const result = await getDiagnosticResponse(input);
      // Se o serviço retornar uma mensagem específica de erro de entidade, pedimos a chave novamente
      if (result.includes("ENTITY_NOT_FOUND")) {
        setNeedsKey(true);
        setResponse("Por favor, selecione uma chave de API válida para continuar.");
      } else {
        setResponse(result);
      }
    } catch (err) {
      setResponse("Erro ao conectar com o servidor de IA. Tente autorizar a conexão novamente.");
      setNeedsKey(true);
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

          {needsKey ? (
            <div className="text-center p-10 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-200 dark:border-orange-800 animate-fade-in">
              <span className="material-icons-outlined text-5xl text-orange-500 mb-4">vpn_key</span>
              <h4 className="text-xl font-bold mb-2">Conexão Necessária</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Para utilizar o motor Gemini 3, é necessário autorizar a conexão através de um projeto faturável do Google Cloud.
              </p>
              <button
                onClick={handleOpenKeySelector}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                Autorizar Conexão com IA
              </button>
              <p className="mt-4 text-xs text-gray-400">
                Consulte a <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline">documentação de faturamento</a> para mais detalhes.
              </p>
            </div>
          ) : (
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
                className={`w-full py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all ${
                  loading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/20 hover:-translate-y-1'
                }`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Processando com Gemini 3...
                  </>
                ) : (
                  <>
                    <span className="material-icons-outlined">psychology</span>
                    Gerar Diagnóstico Grátis
                  </>
                )}
              </button>
            </form>
          )}

          {response && !needsKey && (
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
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline bg-primary/5 px-6 py-3 rounded-full"
                >
                  Falar com consultor humano agora
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
