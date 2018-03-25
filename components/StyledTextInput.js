import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.TextInput`
  background-color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 16;
  height: 50px;
  margin: 10px;
  padding: 4px;
`;

const StyledTextInput = props => <StyledText {...props} />;

export default StyledTextInput;
