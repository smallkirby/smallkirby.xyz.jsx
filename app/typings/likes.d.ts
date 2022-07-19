export type Ent = {
  name: string;
  link?: string;
  description?: string | null;
}

export type Like = {
  title: string;
  ents: Ent[];
}
