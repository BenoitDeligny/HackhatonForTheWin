export class Destination {
  theme: string;
  destination: string;
  destinationDescription: string;
  destinationAnecdote: string;
  destinationPicture1: string;
  destinationPicture2: string;
  destinationPicture3: string;
  ride1: string;
  ride2: string;
  chillPlace: string;
  chillPlacePicture: string;
  ride1Picture: string;
  ride2Picture: string;
  receipe1: Receipe;
  receipe2: Receipe;
}
export class Receipe {
  name: string;
  picture: string;
  preparationTime: string;
  receipeIngredients: Ingredient[];
  receipeSteps: Step[];
}
export class Ingredient {
  id: number;
  ingredient: string;
}
export class Step {
  id: number;
  instruction: string;
}
