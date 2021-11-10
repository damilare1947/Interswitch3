import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function AppButton(props) {
  return (
    <TouchableOpacity style={[styles.button]} onPress={() => props.navigate}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DC2D2D',
    marginRight: 20,
    padding: 12,
    borderRadius: 5,
    width: '70%',

    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
export default AppButton;
