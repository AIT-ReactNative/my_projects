import React from "react";
import { View,Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Text } from "react-native";


const HomeScreen = ({navigation}) => {

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>

            <View style={styles.flat}>

            </View>

            <View style={styles.bottomNav}>

                <Pressable><Image style={{ tintColor:"white", width:50,height:50, marginLeft:10 }} source={require(".././assets/hot-deal.png")}/><Text style={styles.texts}>DISCOVER</Text></Pressable>

                <Pressable><Image style={{ tintColor:"white", width:50,height:50, }} source={require(".././assets/playlist.png")}/> <Text style={styles.texts}>DISCOVER</Text></Pressable>

                <Pressable><Image style={{ tintColor:"white", width:50,height:50, }} source={require(".././assets/glass.png")}/> <Text style={styles.texts}>DISCOVER</Text></Pressable> 

                <Pressable><View style={{width:50,height:50,borderRadius:100, backgroundColor:"white", marginRight:15}}></View> <Text style={styles.texts}>DISCOVER</Text></Pressable> 
            </View>
     

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    container: {
      flex:1,
      backgroundColor: '#000',
    },
  
    flat:{
      flex:1,
      backgroundColor:"white"
    },
  
    bottomNav:{
      height:70,
      alignItems:"center",
      justifyContent:"space-between",
      flexDirection:"row"
  
    },

    bottomNavItems:{
        alignItems:"center",
        justifyContent:"center",
    },
  
    texts:{
      color:"white",
      fontSize: 12,
      paddingLeft:10
    },
  
    icons:{
      width:50,
      height:30,
    }
  });

export default HomeScreen;