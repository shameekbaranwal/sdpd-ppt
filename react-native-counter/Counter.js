import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counter}> {number} </Text>
      <Button
        color='#FFAEBC'
        accessibilityLabel='Increment Counter'
        title='bump'
        onPress={() => setNumber(number + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929',
    width: 200,
    height: 200,
    marginTop: 40,
    borderRadius: 8,
  },
  counter: {
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});
