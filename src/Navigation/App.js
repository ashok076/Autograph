//Project started BY M.Ashok kumar on 06072020
// In App.js in a new project

import  React,{Component} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ToolbarAndroid from '@react-native-community/toolbar-android';


//import screens
import Welcome from '../Screens/Welcome';
import SocialNetworking from '../Screens/SocialNetwork';
import LoginScreen from '../Screens/LoginScreen';
import SignUp from '../Screens/SignUp';

const Drawer = createDrawerNavigator();
const MaterialBottom = createMaterialBottomTabNavigator();
const MaterialTop = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  // initialRouteName="Login"npm 
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Welcome" initialParams={Welcome}  component={Welcome} />
          <Stack.Screen options={{headerShown:false}} name="SocialNetworking"   component={SocialNetworking} />
          <Stack.Screen options={{headerShown:false}} name="SignUp"  component={SignUp} />
          <Stack.Screen options={{headerShown:false}} name="LoginScreen"   component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}






// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;