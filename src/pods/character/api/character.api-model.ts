export interface Character {
  created: string;
  episode: Array<string>;
  gender: string;
  id: string;
  image: string;
  locatiion: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
  bestSentences: string;
}
