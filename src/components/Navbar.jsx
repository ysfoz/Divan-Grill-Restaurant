import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Menu from '../assets/menu.png';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={Menu} style={styles.button} />
      </TouchableOpacity>
      <Text style={styles.header}>Divan Grill</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fb6101',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    padding: 4,
    position: 'relative',
  },
  button: {
    tintColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    left: 5,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color:"white"
  },
});
