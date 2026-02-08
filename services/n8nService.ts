
export const getDiagnosticFromN8N = async (scenario: string) => {
    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
        throw new Error("VITE_N8N_WEBHOOK_URL is not defined");
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ scenario }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Adjust based on actual n8n response structure. 
        // Assuming n8n returns simple text or an object with a specific field.
        // If it returns an array of items (common in n8n), we might need data[0].output or similar.
        // For now, returning the whole response or a specific field if identified.
        // Let's assume it returns { result: "analysis text" } or just the text if configured that way.
        // Given the previous code expected a string, we should ensure we return a string.

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
