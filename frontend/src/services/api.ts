const API = "http://localhost:5000";

export async function generateExperiment(question: string) {
  const response = await fetch(`${API}/api/experiment`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      question,
    }),
  });

  return response.json();
}