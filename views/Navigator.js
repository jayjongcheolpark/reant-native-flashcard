import { StackNavigator } from 'react-navigation';

import DeckList from './DeckList';
import CreateDeck from './CreateDeck';

export const DECKLIST = 'DECKLIST';
export const CREATEDECK = 'CREATEDECK';
export const DECKDETAILS = 'DECKDETAILS';
export const CREATEQUESTION = 'CREATEQUESTION';
export const QUIZ = 'QUIZ';

const Navigator = StackNavigator(
  {
    [DECKLIST]: {
      screen: DeckList,
    },
    [CREATEDECK]: {
      screen: CreateDeck,
    },
  },
  {
    initialRouteName: DECKLIST,
  }
);

export default Navigator;
