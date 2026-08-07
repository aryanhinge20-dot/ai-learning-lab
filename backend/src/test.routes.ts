import { Router } from "express";
import { ai } from "./shared/ai/llm.service";

const router = Router();

router.get("/ai", async (_, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: "Reply with exactly: Hello Aryan",
    });

    res.json({
      success: true,
      text: response.text,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error,
    });
  }
});

export default router;