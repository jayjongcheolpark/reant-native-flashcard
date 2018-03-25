import React from 'react';
import { View, Button } from 'react-native';
import StyledTextInput from '../components/StyledTextInput';

class CreateDeck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deckTitle: '',
    };
  }

  createDeck = () => {
    const { deckTitle } = this.state;
  };

  render() {
    const { deckTitle } = this.state;
    const btnDisabled = deckTitle.trim().length === 0;

    return (
      <View>
        <StyledTextInput
          placeholder="Deck Title"
          value={deckTitle}
          onChangeText={text => this.setState({ deckTitle: text })}
        />
        <Button title="Create Deck" onPress={this.createDeck} disabled={btnDisabled} />
      </View>
    );
  }
}

export default CreateDeck;

// <TextField
//   placeholder="Deck Name"
//   value={deckTitle}
//   onChangeText={text => this.setState({ deckTitle: text })}
// />
