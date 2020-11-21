import React from 'react';
import {View, Text, StatusBar} from 'react-native';

// import RootStack from './RootStack';

export default class SignUpComponent extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Sign Up Screen</Text>
      </View>
    );
  }
}
