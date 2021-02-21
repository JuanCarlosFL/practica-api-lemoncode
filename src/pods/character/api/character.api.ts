import { Character } from './character.api-model';
import { graphQLClient } from 'core/api';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = `
  query {
      character(id: "${id}") {
          id,
          name,
          status,
          species,
          gender,
          image
      }
    }
  `;

  const { character } = await graphQLClient.request<GetCharacterResponse>(query);

  return character
}
