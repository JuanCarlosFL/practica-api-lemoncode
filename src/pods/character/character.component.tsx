import React from 'react';
import { Button } from '@material-ui/core';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onBack: () => void;
}

export const CharacterComponent: React.FC<Props> = (props) => {
  const { character, onBack } = props;

  return (
    <div className={classes.root} style={classes.rootStyle}>
      <h2 style={{textAlign: "center"}}>{character.name}</h2>
      <div style={classes.cardStyle}>
      <img src={character.image} style={classes.image}/>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Status:</strong> {character.status}</p>
      <Button variant="contained" color="primary" onClick={onBack}>Volver</Button>

      </div>
    </div>
  );
};
