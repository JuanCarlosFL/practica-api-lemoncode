import * as React from 'react';
import{ CharacterCollectionVM } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterCollectionVM[]>([]);

  const loadCharacterCollection = async () => {
    try {
      const data = await getCharacterCollection()
        .then((result) => setCharacterCollection(mapToCollection(result.results, mapFromApiToVm)))
        .catch(error => alert(error));
    }
    catch (error) {
      alert(error)
    }

  }

  return { characterCollection, loadCharacterCollection }
}
