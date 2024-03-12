import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Image, Pressable, Text, View } from 'react-native';

import HomeScreen from './Screens/HomeScreen';
import LibraryScreen from './Screens/LibraryScreen';
import PlaylistScreen from './Screens/PlaylistScreen';
import SearchScreen from './Screens/SearchScreen';



const Stack = createNativeStackNavigator();

const MusicPlayer = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= 'Home'>

        <Stack.Screen name="Home" component={HomeScreen} 
          options={{title: 'DISCOVER',headerStyle:{backgroundColor:"black"}, headerTitle: () => (<View style={{flexDirection:"row", alignItems:"center",}}>
            <Image style={{  width:40,marginRight:10,height:25}} source={require("./assets/logo.png")}/>
            <Text style={{ color:"white", flex:1,fontSize: 28,fontWeight:"800", }}>DISCOVER</Text>
            <Pressable ><Image style={{ tintColor:"white", width:30,height:30,marginRight:20}} source={require("./assets/upload_icon.png")}/></Pressable>
            <Image style={{ tintColor:"white", width:30,height:30, marginRight:20}} source={require("./assets/bell.png")}/>
            <Image style={{  width:30, height:30, borderRadius:100, backgroundColor:"white",marginRight:35}} source={require("./assets/splash.png")}/>
          </View>)}} />

        <Stack.Screen name="Playlists" component={PlaylistScreen} />

        <Stack.Screen name="Search" component={SearchScreen} />

        <Stack.Screen name="Library" component={LibraryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MusicPlayer;