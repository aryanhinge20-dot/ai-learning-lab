import { Navigate } from "react-router-dom";

import { useExperiment } from "@/context/ExperimentContext";

import SimulationCanvas from "@/features/simulation/renderer/SimulationCanvas";

export default function ExperimentPage() {
  const { blueprint } = useExperiment();

  if (!blueprint) {
    return <Navigate to="/" replace />;
  }

  const { velocity, angle, gravity } =
    blueprint.simulation.variables;

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold">
        {blueprint.ui.title}
      </h1>

      <p className="mt-2 text-slate-400">
        {blueprint.learning.objective}
      </p>

      <div className="mt-8 grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <SimulationCanvas
            velocity={velocity}
            angle={angle}
            gravity={gravity}
          />
        </div>

        <div className="rounded-xl bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">
            AI Parameters
          </h2>

          <div className="mt-6 space-y-4">
            <p>🚀 Velocity: {velocity} m/s</p>
            <p>📐 Angle: {angle}°</p>
            <p>🌍 Gravity: {gravity}</p>
          </div>

          <hr className="my-6 border-slate-700" />

          <h3 className="font-semibold">
            AI Hint
          </h3>

          <p className="mt-3 text-slate-400">
            {blueprint.learning.hints[0]}
          </p>
        </div>
      </div>
    </main>
  );
}