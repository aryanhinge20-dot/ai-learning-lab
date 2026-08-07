import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export interface ExperimentBlueprint {
  version: string;
  topic: string;

  simulation: {
    type: string;

    variables: {
      velocity: number;
      angle: number;
      gravity: number;
    };

    editable: string[];
  };

  learning: {
    objective: string;
    hints: string[];
    reflection: string[];
  };

  ui: {
    title: string;
    description: string;
  };
}

interface ExperimentContextType {
  blueprint: ExperimentBlueprint | null;
  setBlueprint: (bp: ExperimentBlueprint) => void;
}

const ExperimentContext = createContext<ExperimentContextType | undefined>(
  undefined
);

export function ExperimentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [blueprint, setBlueprint] =
    useState<ExperimentBlueprint | null>(null);

  return (
    <ExperimentContext.Provider
      value={{
        blueprint,
        setBlueprint,
      }}
    >
      {children}
    </ExperimentContext.Provider>
  );
}

export function useExperiment() {
  const context = useContext(ExperimentContext);

  if (!context) {
    throw new Error(
      "useExperiment must be used inside ExperimentProvider"
    );
  }

  return context;
}