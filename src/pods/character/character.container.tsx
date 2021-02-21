import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CharacterComponent } from './character.component';
import { mapCharacterFromApiToVm } from './character.mappers';
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
    try {
      const apiCharacter = await api.getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    } catch (err) {
      alert(err);
      history.goBack();
    }
  }

  const handleBack = () => {
    history.goBack();
  }

  React.useEffect(() => {
    if (id){
      handleLoadCharacter();
    }
  }, []);

  return <CharacterComponent character={character} onBack={handleBack} />;
}
