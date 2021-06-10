import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Item de lista" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View style={styles.items}>
        <View style={styles.item}>
          <Text>Leche</Text>
          <Button title="X" />
        </View>
        <View style={styles.item}>
          <Text>Atún</Text>
          <Button title="X" />
        </View>
        <View style={styles.item}>
          <Text>Cebolla</Text>
          <Button title="X" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
  items: {
    backgroundColor: '#ECECEC',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
  },
});
