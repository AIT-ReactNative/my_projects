import React from "react";
import { View,Text, StyleSheet, SafeAreaView } from "react-native";


const PlaylistScreen = ({navigation}) => {

    return(
        <SafeAreaView>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    container: {
      flex:1,
      backgroundColor: '#000',
    },
  
    header:{
      marginTop:30,
      height:70,
      backgroundColor:"yellow",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      padding:20
    },
  
    flat:{
      flex:1,
      backgroundColor:"white"
      
    },
  
    bottomNav:{
      height:70,
      backgroundColor:"blue"
  
    },
  
    texts:{
      color:"white",
      fontSize: 30
    },
  
    icons:{
      width:50,
      height:30,
    }
  });

export default PlaylistScreen;