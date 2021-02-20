import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import { CharacterCollectionVM } from '../character-collection.vm';
import * as classes from './character.card.styles';

interface Props {
  character: CharacterCollectionVM;
  onShowCharacter: (id: string) => void;
}

const checkStatus = (status: string) => {
  switch (status) {
    case "Alive":
      return "🙂"
    case "Dead":
      return "👿"
    default:
      return "😫"
  }

}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onShowCharacter } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Hotel" style={{backgroundColor: "white"}} >{checkStatus(character.status)}</Avatar>}
        title={character.id}
        subheader={character.status}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>

            <ul className={classes.list}>
              <li><strong>Name:</strong> {character.name}</li>
              <li><strong>Specie:</strong> {character.species}</li>
              <li><strong>Gender:</strong> {character.gender}</li>
              <li><strong>Best Sentences:</strong> {character.bestSentences}</li>
            </ul>
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onShowCharacter(character.id)}>
          <FaceIcon />
          <strong style={{fontSize:"12px"}}>Show details</strong>
        </IconButton>
      </CardActions>
    </Card>
  );
};
