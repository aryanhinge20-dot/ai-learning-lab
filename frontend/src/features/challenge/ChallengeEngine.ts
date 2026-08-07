import type { Challenge } from "./types";
export function createDefaultChallenge(): Challenge {
  return {
    id: crypto.randomUUID(),

    title: "Target Practice",

    description:
      "Land the projectile as close as possible to 50 metres.",

    targetRange: 50,

    tolerance: 0.5,

    completed: false,
  };
}

export function checkChallenge(
  currentRange: number,
  challenge: Challenge
) {
  if (
    challenge.targetRange === undefined ||
    challenge.tolerance === undefined
  ) {
    return false;
  }

  return (
    Math.abs(currentRange - challenge.targetRange) <=
    challenge.tolerance
  );
}