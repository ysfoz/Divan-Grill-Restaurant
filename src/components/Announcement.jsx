import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Announcement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Super Deal! Free Shipping in Orders Over $60</Text>
    </View>
  );
};

export {Announcement};

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: '#22dac5',
    color: 'white',
    alignItems: "center",
    justifyContent: "center",
    
  },
  text:{
color: "white"
  }
  
});