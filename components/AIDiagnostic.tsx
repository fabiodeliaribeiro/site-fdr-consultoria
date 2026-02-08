import React, { useState } from 'react';
import { getDiagnosticFromN8N } from '../services/n8nService';

// Generates a protocol number based on current date/time in Brasilia timezone (UTC-3)
const generateProtocol = (): string => {
  const now = new Date();
  // Convert to Brasilia timezone (UTC-3)
  const brasiliaOffset = -3 * 60; // -3 hours in minutes
  const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
  const brasiliaTime = new Date(utcTime + (brasiliaOffset * 60000));

  const year = brasiliaTime.getFullYear();
  const month = String(brasiliaTime.getMonth() + 1).padStart(2, '0');
  const day = String(brasiliaTime.getDate()).padStart(2, '0');
  const hours = String(brasiliaTime.getHours()).padStart(2, '0');
  const minutes = String(brasiliaTime.getMinutes()).padStart(2, '0');
  const seconds = String(brasiliaTime.getSeconds()).padStart(2, '0');
  const milliseconds = String(brasiliaTime.getMilliseconds()).padStart(3, '0');

  return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
};

const AIDiagnostic: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [protocol, setProtocol] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    setProtocol(null);

    try {
      const newProtocol = generateProtocol();
      setProtocol(newProtocol);
      const result = await getDiagnosticFromN8N(input, newProtocol);
      setResponse(result);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";
      setResponse(`Erro: ${errorMessage}. Verifique se o webhook do n8n está ativo.`);
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppUrl = () => {
    const message = `Gostaria de receber a análise do diagnóstico da empresa realizada pelo consultor IA. Protocolo: ${protocol}`;
    return `https://wa.me/5567999491952?text=${encodeURIComponent(message)}`;
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
              {protocol && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-mono">
                  Protocolo: <span className="font-bold text-primary">{protocol}</span>
                </p>
              )}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {response}
              </p>

              {/* Persuasive CTA Section */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                <p className="text-center text-gray-800 dark:text-gray-200 font-medium mb-2">
                  🎯 <strong>Seu diagnóstico está pronto!</strong>
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Clique abaixo para receber a <strong>análise completa e personalizada</strong> diretamente no seu WhatsApp.
                  Nosso consultor IA irá detalhar as <strong>estratégias específicas</strong> para você vencer licitações.
                </p>
                <div className="flex justify-center">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Receber Análise Completa no WhatsApp
                    <span className="material-icons-outlined">arrow_forward</span>
                  </a>
                </div>
                <p className="text-center text-gray-500 dark:text-gray-500 text-xs mt-3">
                  ⚡ Resposta em até 2 minutos • 100% Gratuito
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIDiagnostic;
