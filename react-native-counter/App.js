import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Counter from './Counter';

const fetchFonts = () => {
  return Font.loadAsync({
    Apple: require('./assets/SF-Pro-Text-Light.otf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.counterContainer}>
        <Text style={styles.header}> React Native Counter </Text>
        <Counter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
  },

  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Apple',
  },
});
