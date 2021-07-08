import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import axios from 'axios';

export default function Card(props) {
  const title = props.title;

  const [name, setName] = useState('');
  const [weather, setWeather] = useState('');
  const [main, setMain] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${title}&appid=7b05341a1d95b8038a1f35197c8369f9&units=metric`
      )
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setMain(res.data.main);
        setWeather(res.data.weather[0]);
      });
  }, [title]);
  const icon = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  return (
    <>
      {title ? (
        <View style={styles.card}>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{name}</Text>
          </View>
          <View style={styles.temp}>
            <View>
              <Text>Max</Text>
              <Text>{main.temp_max}&#8451;</Text>
            </View>
            <View>
              <Text>Min</Text>
              <Text>{main.temp_min}&#8451;</Text>
            </View>
          </View>
          <View style={styles.iconCon}>
            <Text style={{ fontSize: 25, fontWeight: '500' }}>
              {main.temp}&#8451;
            </Text>
            <Image style={styles.icon} source={icon}></Image>
          </View>
          <View>
            <View>
              <Text>Feels Like</Text>
            </View>
            <View>
              <Text>{main.feels_like}&#8451;</Text>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    display: 'flex',
    backgroundColor: '#ECDBBA',
    justifyContent: 'space-around',
    textAlign: 'center',
    color: '#161616',
    padding: 10,
    borderRadius: 5,
  },
  temp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    height: 100,
    width: 100,
  },
  iconCon: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
});
