import { CharacterEntityApi } from './character-collection.api.model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character'

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> =>
  Axios.get(url).then(response => response.data)
