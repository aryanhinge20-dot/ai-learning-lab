import { ExperimentBlueprint } from "./experiment.types";

export function generateBlueprint(
  question: string
): ExperimentBlueprint {
  console.log("Question:", question);

  return {
    version: "1.0",

    topic: "projectile_motion",

    simulation: {
      type: "projectile",

      variables: {
        velocity: 20,
        angle: 45,
        gravity: 9.81,
      },

      editable: [
        "velocity",
        "angle",
        "gravity",
      ],
    },

    learning: {
      objective:
        "Understand how launch angle affects projectile motion.",

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
      title: "Projectile Motion",

      description:
        "Explore how different launch parameters affect the trajectory.",
    },
  };
}