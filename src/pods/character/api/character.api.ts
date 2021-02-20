import { Character } from './character.api-model';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
  const data = await response.json();
  return data;
}
