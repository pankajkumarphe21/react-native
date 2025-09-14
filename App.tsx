import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Home from './src/components/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './src/components/Profile';
import Search from './src/components/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Home' 
    screenOptions={{tabBarActiveTintColor:"green",tabBarInactiveTintColor:"black",tabBarLabelStyle:{fontSize:12},tabBarStyle:{
      height:60
    }}}>
      <Tab.Screen name="Home" component={Home} 
      options={{headerShown:false,tabBarIcon:({size,color})=>(
        <AntDesign name="home" size={30} color={color}/>
      )}}/>
      <Tab.Screen name="Profile" component={Profile} 
      options={{headerShown:false,tabBarActiveTintColor:"red",tabBarIcon:({size,color})=>(
        <Feather name="user" size={30} color={color} />
      )}}
      />
      <Tab.Screen name="Search" component={Search} 
      options={{headerShown:false,tabBarIcon:({size,color})=>(
        <Octicons name="search" size={30} color={color}/>
      )}}/>
    </Tab.Navigator>
  );
}

const StackNavigator=()=>{
  return(
    <Stack.Navigator initialRouteName='Home' screenOptions={{
      headerStyle:{backgroundColor:"green"}
    }}>
      <Stack.Screen component={Home} name="Home" options={{title:"Home Screen"}}></Stack.Screen>
      <Stack.Screen component={Profile} name="Profile" options={{headerStyle:{backgroundColor:"yellow"}}}></Stack.Screen>
      <Stack.Screen component={Search} name="Search"></Stack.Screen>
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}

export default App

const style=StyleSheet.create({

})