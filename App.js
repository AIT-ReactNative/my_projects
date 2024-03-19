import React, { useState} from 'react';


import HomeScreen from './Screens/HomeScreen';
import LibraryScreen from './Screens/LibraryScreen';
import PlaylistScreen from './Screens/PlaylistScreen';
import SearchScreen from './Screens/SearchScreen';

const MusicPlayer = () => {
  const [currentScreen, setCurrentScreen] = useState("HomeScreen");

  const navigateToScreen = (screenName) => {
      setCurrentScreen(screenName)
  };

  return (
    <View style={{ flex: 1}}>
      {currentScreen === 'HomeScreen' && <HomeScreen navigateToScreen={navigateToScreen} />}
      {currentScreen === 'LibraryScreen' && <LibraryScreen navigateToScreen={navigateToScreen} />}
      {currentScreen === 'PlaylistScreen' && <PlaylistScreen navigateToScreen={navigateToScreen} />}
      {currentScreen === 'SearchScreen' && <SearchScreen navigateToScreen={navigateToScreen} />}
    </View>
  );
};

export default MusicPlayer;

