export interface Challenge {
    id: string;
    title: string;
    description: string;
  
    targetRange?: number;
    tolerance?: number;
  
    completed: boolean;
  }