import * as apiModel from './api/character-collection.api.model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterCollectionVM => ({
  id: character.id,
  name: character.name,
  image: character.image,
  gender: character.gender,
  species: character.species,
  status: character.status,
  bestSentences: character.bestSentences,
});
