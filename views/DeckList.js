import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';
import { CREATEDECK } from './Navigator';

class DeckList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Decks',
  });

  fetchDecks() {
    console.log(this.props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ backgroundColor: 'red' }}>
        <Button
          title="Create New Deck"
          onPress={() => navigation.navigate(CREATEDECK, { fetchDecks: () => this.fetchDecks() })}
        />
        <Text>DeckList</Text>
      </View>
    );
  }
}

DeckList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DeckList;
