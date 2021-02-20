import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CharacterComponent } from './character.component';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import * as api from './api';
import { Character, createEmptyCharacter } from './character.vm';

interface Props {
  id: string;
}

export const CharacterContainer: React.FC = () => {

  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<Props>();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    try{
      const apiCharacter = await api.getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    }
    catch (err){
      alert(err);
      history.goBack();

    }
  }

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save hotel');
    }
  }

  React.useEffect(() => {
    if (id){
      handleLoadCharacter();
    }
  }, []);

  return <CharacterComponent character={character} onSave={handleSave} />;
}
