
export const getDiagnosticFromN8N = async (scenario: string) => {
    const webhookUrl = "https://n8n.fdrconsultoria.cloud/webhook-test/dacb4f97-3e72-4f7b-914d-6012404e47da";

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: scenario }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Adjust based on actual n8n response structure. 
        if (typeof data === 'string') return data;
        if (data.output) return data.output;
        if (data.result) return data.result;
        if (data.text) return data.text;
        if (data.message) {
            if (data.message === "Workflow was started") {
                return "Nosso agente de IA está analisando a mensagem.";
            }
            return data.message;
        }

        return JSON.stringify(data); // Fallback

    } catch (error) {
        console.error("Error connecting to n8n:", error);
        throw new Error("Falha ao se comunicar com o serviço de diagnóstico.");
    }
};
