import { StackNavigator } from 'react-navigation';
import DeckList from './DeckList';

export const DECKLIST = 'DECKLIST';

const Navigator = StackNavigator({
  [DECKLIST]: {
    screen: DeckList,
  },
});

export default Navigator;
