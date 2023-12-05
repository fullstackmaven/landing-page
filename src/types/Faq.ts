export interface TFaq {
  questions: TFaqContent[];
  unsure: boolean;
}

export interface TFaqContent {
  question: string;
  answer: string;
}
