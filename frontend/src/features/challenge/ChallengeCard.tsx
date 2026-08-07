import type { Challenge } from "./types";

interface Props {
  challenge: Challenge;
  currentRange: number;
  success: boolean;
}

export default function ChallengeCard({
  challenge,
  currentRange,
  success,
}: Props) {
  return (
    <div className="mt-6 rounded-xl bg-slate-900 p-6 border border-slate-700">

      <h2 className="text-2xl font-bold">
        🎯 Challenge Mode
      </h2>

      <p className="mt-4 text-slate-300">
        {challenge.description}
      </p>

      <div className="mt-6 space-y-2">

        <p>
          🎯 Target :
          <b> {challenge.targetRange} m</b>
        </p>

        <p>
          📏 Current :
          <b> {currentRange.toFixed(2)} m</b>
        </p>

      </div>

      {success ? (
        <div className="mt-6 rounded-lg bg-green-900/40 p-4 border border-green-600">

          <h3 className="text-green-400 font-bold">
            🎉 Challenge Complete!
          </h3>

          <p className="mt-2 text-green-300">
            Excellent! You landed within the target range.
          </p>

        </div>
      ) : (
        <div className="mt-6 rounded-lg bg-yellow-900/30 p-4 border border-yellow-600">

          <h3 className="text-yellow-400 font-bold">
            Keep Experimenting!
          </h3>

          <p className="mt-2 text-yellow-300">
            Adjust the sliders and try again.
          </p>

        </div>
      )}

    </div>
  );
}