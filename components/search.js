import React, { useState } from 'react';
import {
  Text,
  Button,
  View,
  Background,
  StyleSheet,
  TextInput,
} from 'react-native';
import Card from "./card"


export default function Search() {
  const [search, setSearch] = useState('');
  const [fsearch, setfSearch] = useState('');

  function handleInput(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  function handleClick(e) {
    console.log(search);
    setfSearch(search);
  }

  return (
    <View>
      <View>
        <TextInput
          style={styles.textInput}
          onChange={handleInput}
          value={search}
          placeholder="Enter City"
        />
      </View>
      <View style={styles.button}>
        <Button title="search" color="#39a6a3" onPress={handleClick} />
      </View>
      <Card title={fsearch}/>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    marginHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#47597e',
  },

  button: {
    margin: 30,
    marginTop: 15,
    width:"20%",
    shadowColor: 'orange',
    shadowOffset: { height: 8, width: 5 },
    shadowOpacity: 2,
    shadowRadius: 4,
    borderRadius: 10,
  },

  input: {},
});
