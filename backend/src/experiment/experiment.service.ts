import { ai } from "../shared/gemini/gemini.service";
import { projectilePrompt } from "../prompts/projectile.prompt";
import { ExperimentBlueprint } from "./experiment.types";

export async function generateBlueprint(
  question: string
): Promise<ExperimentBlueprint> {

  const prompt = `
${projectilePrompt}

Question:
${question}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: prompt,
  });

  const text = response.text;

  return JSON.parse(text!) as ExperimentBlueprint;
}