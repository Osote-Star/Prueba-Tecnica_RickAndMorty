export interface CharacterResponse {
  info: { count: number; pages: number; next: string; prev: string | null };
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: { name: string };
  created: string;
}
