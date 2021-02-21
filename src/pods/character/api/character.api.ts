import { Character } from './character.api-model';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch (`${url}/${id}`);
  if (response.ok){
    const data = await response.json();
    return data;
  } else {
    throw Error(response.statusText);
  }
}
