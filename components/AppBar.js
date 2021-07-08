import React from 'react';
import { Header } from 'react-native-elements';

export default function AppBar() {
  return (
    <Header
      backgroundColor={'#c84b31'}
      centerComponent={{
        text: 'Weather',
        style: { color: '#ecdbba', fontWeight: '750', fontSize: 30 , fontFamily:"Courier" },
      }}
    />
  );
}
