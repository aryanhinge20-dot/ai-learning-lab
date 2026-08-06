export interface ExperimentBlueprint {
    topic: string;
  
    simulation: {
      type: string;
  
      variables: Record<string, number>;
  
      editable: string[];
    };
  
    learning: {
      objective: string;
  
      hints: string[];
  
      reflection: string[];
    };
  }