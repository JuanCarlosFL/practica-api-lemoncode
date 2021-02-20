import * as React from "react";
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { CharacterCollectionComponent } from "./character-collection.component";
import { useCharacterCollection } from "./character-collection.hook";

export const CharacterCollectionContainer: React.FC = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
      loadCharacterCollection();
  }, []);

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };
  return <CharacterCollectionComponent
    characterCollection={characterCollection}
    onShowCharacter={handleEdit}
  />;
}
