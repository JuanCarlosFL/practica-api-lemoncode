import * as React from "react";
import { CharacterCollectionVM } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterCollectionVM[];
  onShowCharacter: (id: string) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {

  const {characterCollection, onShowCharacter} = props;

  return (
    <div className={classes.root}>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onShowCharacter={onShowCharacter}  />
          </li>
        ))}
      </ul>
    </div>
  );
}
