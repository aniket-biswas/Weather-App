import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import AppBar from './components/AppBar'
import Search from "./components/search"

export default function App(){
  return(
    <View>
      <AppBar/>
      <Search/>
    </View>
  )
}


