import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Procura por um restaurante"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  backgroundStyle: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 17,
    marginVertical: 12,
    flexDirection: 'row'
},
searchIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10
},
inputStyle: {
    fontSize: 20,
    flex: 1
}
});

export default SearchBar;
