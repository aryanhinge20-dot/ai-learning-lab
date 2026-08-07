import { ai } from "../shared/ai/llm.service";
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

  console.log("========== QUESTION ==========");
  console.log(question);

  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: prompt,
  });

  console.log("========== RAW RESPONSE ==========");
  console.log(response);

  const text = response.text ?? "";

  console.log("========== RESPONSE TEXT ==========");
  console.log(text);

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  console.log("========== CLEANED JSON ==========");
  console.log(cleaned);

  const data = JSON.parse(cleaned);

  console.log("========== PARSED DATA ==========");
  console.log(data);

  const blueprint: ExperimentBlueprint = {
    version: "1.0",

    topic: data.topic,

    simulation: {
      type: "projectile",

      variables: {
        velocity: data.velocity,
        angle: data.angle,
        gravity: data.gravity ?? 9.81,
      },

      editable: [
        "velocity",
        "angle",
        "gravity",
      ],
    },

    learning: {
      objective: data.objective,

      hints: [
        "Increase the launch angle.",
        "Observe the maximum height.",
        "Compare the range.",
      ],

      reflection: [
        "What changed when the angle increased?",
      ],
    },

    ui: {
      title: "Projectile Motion Explorer",

      description:
        "Learn projectile motion through experimentation.",
    },
  };

  console.log("========== FINAL BLUEPRINT ==========");
  console.log(JSON.stringify(blueprint, null, 2));

  return blueprint;
}