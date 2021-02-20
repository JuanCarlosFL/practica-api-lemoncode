import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { CharacterCollectionVM } from '../character-collection.vm';
import * as classes from './character.card.styles';

interface Props {
  character: CharacterCollectionVM;
  onShowCharacter: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onShowCharacter } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Hotel" src={character.image} />}
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
              <li><strong>Name:</strong> </li>
              <li><strong>Specie:</strong> {character.species}</li>
              <li><strong>Gender:</strong> {character.gender}</li>
            </ul>
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onShowCharacter(character.id)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
