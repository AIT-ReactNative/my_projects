import React, { useState } from "react";
import { View,Text,Image, StyleSheet, SafeAreaView, StatusBar, Pressable } from "react-native";





const LibraryScreen = ({navigateToScreen}) => {

    const [isActive, setIsActive] = useState(true);

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>

            <View style={styles.header}>
                <Image style={[styles.icons, {width:40}]} source={require(".././assets/logo.png")}/>

                <View style={{width:150,height:50, marginLeft:-15,alignItems:"center", justifyContent:'center'}} ><Text style={styles.headerText} adjustsFontSizeToFit={true} numberOfLines={1} >MY LIBRARY</Text></View>

                <View style={[styles.header, {justifyContent:"space-around", width:150}]}>
                    <Image style={[styles.icons, {tintColor:"white"}]} source={require(".././assets/upload_icon.png")}/>
                    <Image style={[styles.icons, {tintColor:"white"}]} source={require(".././assets/bell.png")}/>
                    <View style={{width:30,height:30,borderRadius:100, backgroundColor:"white",}}></View>
                </View>

            </View>

            <View style={styles.flat}>
                <Text style={styles.texts}>DISCOVER</Text>
                <Text style={styles.texts}>DISCOVER</Text>
                <Text style={styles.texts}>DISCOVER</Text>
                <Text style={styles.texts}>DISCOVER</Text>

            </View>

            <View style={styles.bottomNav}>

            <Pressable
                    onPress={() => {
                        setIsActive(!isActive);
                        navigateToScreen("HomeScreen");
                    }}
                >
                    {() => (
                        <><Image
                            style={[{ width: 40, height: 40, marginLeft: 10, tintColor:'white' }]}
                            source={require(".././assets/hot-deal.png")} /><Text style={styles.texts}>DISCOVER</Text></>
                    )}
                </Pressable>

                <Pressable onPress={() => navigateToScreen("PlaylistScreen")}>
                {() => (
                        <><Image
                            style={[{ width: 40, height: 40, marginLeft: 10, tintColor: 'white' }]}
                            source={require(".././assets/playlist.png")} /><Text style={styles.texts}>PLAYLIST</Text></>
                    )}
                </Pressable>

                <Pressable onPress={() => navigateToScreen("SearchScreen")}>
                {() => (
                        <><Image
                            style={[{ width: 40, height: 40, tintColor: 'white' , tintColor: 'white'}]}
                            source={require(".././assets/glass.png")} /><Text style={styles.texts}>SEARCH</Text></>
                    )}
                </Pressable>

                <Pressable onPress={() => navigateToScreen("LibraryScreen")}>
                {({ pressed }) => (
                        <><View style={{width:40, height:40,borderRadius:50,marginLeft:15, backgroundColor:"white"}}></View><Text style={[styles.texts ,{color: isActive || pressed ? 'orange' : 'white' }]}>MY LIBRARY</Text></>
                    )}
                </Pressable>
            </View>
     

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    container: {
      flex:1,
      backgroundColor: '#000',
    },

    header:{
        height:70,
        padding:10,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row"
    },
  
    flat:{
      flex:1,
    },
  
    bottomNav:{
      height:70,
      alignItems:"center",
      justifyContent:"space-around",
      flexDirection:"row"
  
    },

    bottomNavItems:{
        alignItems:"center",
        justifyContent:"center",
    },
  
    texts:{
      color:"white",
      fontSize: 12,
      fontWeight:"bold"
    },

    headerText:{
        marginLeft:-5,
        fontSize:60,
        fontWeight:"700",
        color:"white"
    },
  
    icons:{
      width:30,
      height:30,
    }
  });

export default LibraryScreen;