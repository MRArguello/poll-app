export type Question = {
  question: string;
  published_at: string;
  url: string;
  choices: Choice[];
}

export type Choice = {
  choice: string;
  votes: number;
  url: string;
}
