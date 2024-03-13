import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import RNFS from 'react-native-fs';

const MusicApp = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        // Function to retrieve songs from local storage
        const fetchSongs = async () => {
            try {
                // Get the directory where your music files are stored
                const musicDirectory = RNFS.DocumentDirectoryPath;
                
                // Read the contents of the directory
                const files = await RNFS.readDir(musicDirectory);
                
                // Filter out only music files (e.g., mp3)
                const musicFiles = files.filter(file => file.name.endsWith('.mp3'));
                
                // Extract file names from the paths
                const songNames = musicFiles.map(file => file.name);
                
                // Update state with the list of song names
                setSongs(songNames);
            } catch (error) {
                console.error('Error reading music directory:', error);
            }
        };

        // Call the function to fetch songs
        fetchSongs();
    }, []);

    return (
        <View>
            <Text>List of Songs:</Text>
            <FlatList
                data={songs}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default MusicApp;
