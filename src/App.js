import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import RootStack from './RootStack';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

// return (
//   <View
//     style={{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//     <Text>Hello Archana</Text>
//   </View>
// );
