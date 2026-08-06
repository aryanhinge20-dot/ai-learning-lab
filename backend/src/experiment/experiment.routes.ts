import { Router } from "express";
import { generateExperiment } from "./experiment.controller";

const router = Router();

router.post("/", generateExperiment);

export default router;