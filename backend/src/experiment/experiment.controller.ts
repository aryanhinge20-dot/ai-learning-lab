import { Request, Response } from "express";
import { generateBlueprint } from "./experiment.service";

export function generateExperiment(
  req: Request,
  res: Response
) {
  const { question } = req.body;

  const blueprint = generateBlueprint(question);

  res.json(blueprint);
}