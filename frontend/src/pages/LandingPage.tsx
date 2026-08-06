import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateExperiment } from "@/services/api";
import QuestionInput from "@/components/question/QuestionInput";
import GenerateButton from "@/components/question/GenerateButton";

export default function LandingPage() {
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  async function handleGenerate() {
    console.log("Button Clicked!");
  
    try {
      const result = await generateExperiment(question);
  
      console.log(result);
  
      navigate("/experiment");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-8 py-12">
      <h1 className="text-5xl font-bold">
        AI Learning Lab
      </h1>

      <p className="mt-3 text-slate-400">
        Learn by experimenting instead of memorizing.
      </p>

      <div className="mt-10 w-full max-w-4xl">
        <QuestionInput
          question={question}
          setQuestion={setQuestion}
        />
      </div>

      <div className="mt-6">
        <GenerateButton
          onClick={handleGenerate}
        />
      </div>
    </main>
  );
}