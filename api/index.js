import { AsyncStorage } from 'react-native';

const DECKS_ASYNC_STORAGE_KEY = 'DECKS_ASYNC_STORAGE_KEY';

export const getDecks = () =>
  AsyncStorage.getItem(DECKS_ASYNC_STORAGE_KEY).then(item => (item === null ? {} : JSON.parse(item)));

export const getDeck = key => getDecks().then(decks => (Object.keys(decks).length === 0 ? {} : decks[key]));

export const createDeck = (key, title, questions = []) => {
  const data = JSON.stringify({
    [key]: {
      key,
      title,
      questions,
    },
  });
  return AsyncStorage.mergeItem(DECKS_ASYNC_STORAGE_KEY, data).then(() => getDeck(key));
};

export const deleteDeck = deck =>
  getDecks().then(decks => {
    decks[deck.key] = undefined;
    delete decks[deck.key];
    return AsyncStorage.setItem(DECKS_ASYNC_STORAGE_KEY, JSON.stringify(decks));
  });

export const clear = () => AsyncStorage.clear();

export const addQuestionToDeck = (deck, questionTitle, correctAnswer, wrongAnswer) => {
  const { key, title, questions } = deck;
  const question = {
    title: questionTitle,
    correctAnswer,
    wrongAnswer,
  };
  questions.push(question);
  return this.createDeck(key, title, questions);
};
