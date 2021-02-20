import React from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent
} from 'common/components';
import { Button } from '@material-ui/core';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FC<Props> = (props) => {
  const { character , onSave} = props;
  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
      { () => (
      <Form className={classes.root} style={classes.rootStyle}>
        <h2 style={{textAlign: "center"}}>{character.name}</h2>
        <div style={classes.cardStyle}>

            <img src={character.image} style={classes.image}/>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Status:</strong> {character.status}</p>
            <TextFieldComponent
              name="bestSentences"
              label="Best Sentences"
            />
            <Button type="submit" variant="contained" color="primary">Guardar</Button>
          </div>

      </Form>
      )}
    </Formik>
  );
};
