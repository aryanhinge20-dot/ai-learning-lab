export interface Experiment {
    topic: string;
  
    known_values: Record<string, number>;
  
    unknown: string[];
  
    learning_goal: string;
  
    simulation_parameters: {
      editable: boolean;
    };
  }