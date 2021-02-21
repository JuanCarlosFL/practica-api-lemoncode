import { CharacterEntityApi } from './character-collection.api.model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface Results {
  results: CharacterEntityApi[];
}

interface GetCharacterCollectionResponse {
  characters: Results;
}

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
   const query = gql`
      query {
        characters {
          results {
            id,
            name,
            status,
            species,
            gender,
            image
          }
        }
      }
   `;

   const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(
     query
   );

   return characters.results;
}
