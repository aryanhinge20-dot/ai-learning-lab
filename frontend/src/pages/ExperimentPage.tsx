import { Navigate } from "react-router-dom";
import { useExperiment } from "@/context/ExperimentContext";

export default function ExperimentPage() {
  const { blueprint } = useExperiment();

  if (!blueprint) {
    return <Navigate to="/" replace />;
  }

  const { velocity, angle, gravity } = blueprint.simulation.variables;

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold">
        {blueprint.ui.title}
      </h1>

      <p className="mt-3 text-slate-400">
        {blueprint.ui.description}
      </p>

      <div className="mt-10 rounded-xl bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold mb-4">
          AI Generated Values
        </h2>

        <div className="space-y-3 text-lg">
          <p>🚀 Velocity : {velocity} m/s</p>
          <p>📐 Angle : {angle}°</p>
          <p>🌍 Gravity : {gravity} m/s²</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-slate-700 h-[500px] flex items-center justify-center">
        <p className="text-slate-500 text-xl">
          Simulation Canvas Coming Next...
        </p>
      </div>
    </main>
  );
}