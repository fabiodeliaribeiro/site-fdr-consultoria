
import { GoogleGenAI } from "@google/genai";

export const getDiagnosticResponse = async (userMessage: string) => {
  try {
    // Cria uma nova instância a cada chamada para garantir o uso da chave mais recente do diálogo
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `Você é o Especialista Chefe de Licitações da FDR Consultoria.
        Analise o cenário do usuário e forneça um diagnóstico técnico de 3 parágrafos:
        1. Resumo do potencial de mercado governamental para o produto/serviço dele.
        2. Alerta sobre os erros mais comuns de documentação ou técnica no setor dele.
        3. Recomendação de como a FDR Consultoria pode blindar a empresa dele contra desclassificações.
        Seja assertivo, use termos como 'Segurança Jurídica', 'Vantagem Competitiva' e 'Recorrência de Receita'.`,
        temperature: 0.7,
      },
    });
    
    if (!response || !response.text) {
      throw new Error("Resposta vazia da IA");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini SDK Error:", error);
    
    // Captura o erro específico de entidade não encontrada para resetar o seletor de chave
    if (error.message && error.message.includes("Requested entity was not found")) {
      return "ENTITY_NOT_FOUND: Por favor, selecione um projeto válido no AI Studio.";
    }

    return "Desculpe, não conseguimos processar seu diagnóstico via IA no momento devido a uma falha de conexão. Por favor, utilize o botão do WhatsApp para falar diretamente com nossa equipe técnica.";
  }
};
