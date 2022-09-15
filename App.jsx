import * as React from 'react';
import {View, TouchableOpacity, Image, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './src/pages/Home';
import Product from './src/pages/Product';
import DrawerRouter from './DrawerRouter';
import Navbar from './src/components/Navbar';
import {Announcement} from './src/components/Announcement';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = (props) => {
//   //Structure for the navigation Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <TouchableOpacity onPress={toggleDrawer}>
//         {/*Donute Button Image */}
//         <Image
//           source={{
//             uri:
//               'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
//           }}
//           style={{ width: 25, height: 25, marginLeft: 5 }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// function firstScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen
//         name="home"
//         component={Home}
//         options={{
//           title: 'Home', //Set Header Title
//           headerLeft: () => (
//             <NavigationDrawerStructure navigationProps={navigation} />
//           ),
//           headerStyle: {
//             backgroundColor: '#f4511e', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function secondScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="Product"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="Product"
//         component={Product}
//         options={{
//           title: 'Product', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Announcement />
        <Navbar />
      </SafeAreaView>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
          //  drawerHideStatusBarOnOpen:true,
          headerShown: false,
        }}
        drawerContent={props => <DrawerRouter {...props} />}>
        <Drawer.Screen
          name="Divan Grill"
          options={{drawerLabel: 'Home'}}
          component={Home}
        />
        <Drawer.Screen
          name="Product"
          options={{drawerLabel: 'Product'}}
          component={Product}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
