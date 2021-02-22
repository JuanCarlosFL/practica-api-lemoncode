import { Character } from './character.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> =>
  await Axios.get(`${url}/${id}`).then(response => response.data)
