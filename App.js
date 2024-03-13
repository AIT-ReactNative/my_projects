import React, { useState, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';

import HomeScreen from './Screens/HomeScreen';
import LibraryScreen from './Screens/LibraryScreen';
import PlaylistScreen from './Screens/PlaylistScreen';
import SearchScreen from './Screens/SearchScreen';

const MusicPlayer = () => {
  const [currentScreen, setCurrentScreen] = useState("HomeScreen");
  const opacity = useRef(new Animated.Value(1)).current;

  const navigateToScreen = (screenName) => {
    Animated.timing(opacity, {
      toValue:1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setCurrentScreen(screenName);
      Animated.timing(opacity, {
        toValue:1,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <Animated.View style={{ flex: 1, opacity }}>
      {currentScreen === 'HomeScreen' && <HomeScreen navigateToScreen={navigateToScreen} />}
      {currentScreen === 'LibraryScreen' && <LibraryScreen navigateToScreen={navigateToScreen} />}
      {currentScreen === 'PlaylistScreen' && <PlaylistScreen navigateToScreen={navigateToScreen} />}
      {currentScreen === 'SearchScreen' && <SearchScreen navigateToScreen={navigateToScreen} />}
    </Animated.View>
  );
};

export default MusicPlayer;

import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('MusicPlayer', () => MusicPlayer);
