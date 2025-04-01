import { Expertise } from "./expertise";

export interface About {
  id: string;
  studio: string;
  year: string;
  description: string;
  mission: string;
  vision: string;
  quote: string;
  quoteAuthor: string;
  image: string;
  Expertise: { id: string; path: string }[];
}
