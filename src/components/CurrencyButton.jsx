import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CurrencyButton = ({flag, name}) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#FFF',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: '#FFF',
  },
});
