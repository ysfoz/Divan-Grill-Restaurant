import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import logo from './src/assets/divan-grill.jpeg';

const DrawerRouter = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.imageContainer}>

      <Image source={logo} style={styles.sideMenuProfileIcon} />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://www.divangrill.de/')}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('/');
            }}>
            Rate Us
          </Text>
          <Image source={logo} style={styles.iconStyle} />
        </View>
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
        }}>
        www.divangrill.de
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer:{
    width: 150,
    height: 100,
    alignSelf: 'center',

  },
  sideMenuProfileIcon: {
    resizeMode:"cover",
    borderRadius: 8,
    width: "90%",
    height: "90%",
    marginTop:7
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DrawerRouter;
