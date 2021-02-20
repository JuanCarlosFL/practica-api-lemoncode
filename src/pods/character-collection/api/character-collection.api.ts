import { CharacterEntityApi } from './character-collection.api.model';

const url = 'api/results';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await fetch(url);
  const data = await response.json()
  console.log(data)
      return data;
}
