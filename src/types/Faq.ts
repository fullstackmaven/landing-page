export interface Faq {
  question: string;
  answer: string;
}

export interface FaqPage {
  page: 'home' | 'se' | 'qa' | 'ui-arc';
}