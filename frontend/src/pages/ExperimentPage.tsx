import { Navigate } from "react-router-dom";

import { useExperiment } from "@/context/ExperimentContext";

import SimulationCanvas from "@/features/simulation/renderer/SimulationCanvas";
import { useState } from "react";

export default function ExperimentPage() {
  const { blueprint } = useExperiment();

  if (!blueprint) {
    return <Navigate to="/" replace />;
  }



  const [velocity, setVelocity] = useState(
    blueprint.simulation.variables.velocity
  );
  
  const [angle, setAngle] = useState(
    blueprint.simulation.variables.angle
  );
  
  const [gravity, setGravity] = useState(
    blueprint.simulation.variables.gravity
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold">
        {blueprint.ui.title}
      </h1>

      <p className="mt-2 text-slate-400">
        {blueprint.learning.objective}
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-3">
          <SimulationCanvas
            velocity={velocity}
            angle={angle}
            gravity={gravity}
          />
        </div>

        <div className="rounded-xl bg-slate-900 p-6">

<h2 className="text-xl font-semibold">
  Simulation Controls
</h2>

<div className="mt-6">

  <label className="block mb-2">
    🚀 Velocity
  </label>

  <input
    type="range"
    min={5}
    max={60}
    value={velocity}
    onChange={(e) =>
      setVelocity(Number(e.target.value))
    }
    className="w-full"
  />

  <p className="mb-6">
    {velocity} m/s
  </p>

  <label className="block mb-2">
    📐 Angle
  </label>

  <input
    type="range"
    min={10}
    max={80}
    value={angle}
    onChange={(e) =>
      setAngle(Number(e.target.value))
    }
    className="w-full"
  />

  <p className="mb-6">
    {angle}°
  </p>

  <label className="block mb-2">
    🌍 Gravity
  </label>

  <input
    type="range"
    min={1}
    max={20}
    step={0.1}
    value={gravity}
    onChange={(e) =>
      setGravity(Number(e.target.value))
    }
    className="w-full"
  />

  <p>
    {gravity} m/s²
  </p>
  <hr className="my-6 border-slate-700" />

<h3 className="text-lg font-semibold">
  🤖 AI Hint
</h3>

<p className="mt-3 text-slate-400">
  {blueprint.learning.hints[0]}
</p>

</div>

</div>
      </div>
    </main>
  );
}