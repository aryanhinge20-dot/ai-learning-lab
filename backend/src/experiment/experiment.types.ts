export interface ExperimentBlueprint {
    version: "1.0";
  
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
  
    ui: {
      title: string;
  
      description: string;
    };
  }