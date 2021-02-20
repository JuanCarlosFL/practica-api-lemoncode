export interface Character {
  name: string;
  image: string;
  id: string;
  gender: string;
  species: string;
  status: string;
}

export const createEmptyCharacter = (): Character => ({
  name: '',
  image: '',
  id: '',
  gender: '',
  species: '',
  status: '',
});
