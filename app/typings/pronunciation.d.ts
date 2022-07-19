export type PronEnt = {
  name: string;
  pronountiation: string;
  description?: string | null;
  link?: string | null;
  strict: boolean;
}

export type Pronunciation = {
  genre: string;
  ents: PronEnt[];
}
