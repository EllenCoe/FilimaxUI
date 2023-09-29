export type UserSchema = {
    id: number,
    name: string,
    status?: string,
    createdAt: string | null,
    author: string,
    description?: string,
    timeStepMin?: number,
    timeStepMax?: number,
    timeStepOpeningWell?: number,
    timeStepNumberMax?: number,
    models?: Array<number> | null,
    tags?: Array<string> | null, 
   
  };
  