import { Request, Response } from "express";
import { generateBlueprint } from "./experiment.service";

export async function generateExperiment(
  req: Request,
  res: Response
) {
  try {
    const { question } = req.body;

    const blueprint = await generateBlueprint(question);

    res.json(blueprint);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate experiment.",
    });
  }
}