import React, { useState } from "react";
import { View,Text, StyleSheet, SafeAreaView, Image, Platform, Pressable, TextInput,Modal, KeyboardAvoidingView, ScrollView } from "react-native";



const SearchScreen = ({navigateToScreen}) => {
    const [ search, setSearch] = useState(" ");
    const [isActive, setIsActive] = useState(true);

    const [isModal, setModal] = useState(false);
    const [modalText, setModalText] = useState("");

   
    const NotificationsModal = ({ closeModal }) => {
        return (
            <View style={{ flex: 1, backgroundColor: "#000000" }}>
                <View style={{ flexDirection: "row", height: 70, padding: 20, alignItems: "center", justifyContent: "space-between" }}>
                    <Image style={[styles.icons, { width: 50, marginRight: 10 }]} source={require(".././assets/logo.png")} />
                    <Text style={styles.headerText}>NOTIFICATIONS</Text>
                    <Pressable onPress={closeModal}>
                        <Image style={[styles.icons, { width: 40, tintColor: "white" }]} source={require(".././assets/close.png")} />
                    </Pressable>
                </View>
                {/* Your notifications modal content */}
            </View>
        );
    };
    
    const SettingsModal = ({ closeModal }) => {
        return (
            <View style={{ flex: 1, backgroundColor: "#000000" }}>
                <View style={{ flexDirection: "row", height: 70, padding: 20, alignItems: "center", justifyContent: "space-between" }}>
                    <Image style={[styles.icons, { width: 50, marginRight: 10 }]} source={require(".././assets/logo.png")} />
                    <Text style={styles.headerText}>SETTINGS</Text>
                    <Pressable onPress={closeModal}>
                        <Image style={[styles.icons, { width: 40, tintColor: "white" }]} source={require(".././assets/close.png")} />
                    </Pressable>
                </View>
                <View><Text style={styles.texts}>Settings</Text></View>
            </View>
        );
    };
    
    const modalScreen = () => {
        const closeModal = () => {
            setModal(false);
        };
    
        return (
            <Modal visible={isModal} animationType="slide" presentationStyle="pageSheet" onRequestClose={closeModal}>
                {modalText === "NOTIFICATIONS" && <NotificationsModal closeModal={closeModal} />}
                {modalText === "SETTINGS" && <SettingsModal closeModal={closeModal} />}
            </Modal>
        );
    };

    return(
        <SafeAreaView style={styles.container}>
           
          <View style={styles.header}>
                <Image style={[styles.icons, {width:40}]} source={require(".././assets/logo.png")}/>

                <Text style={styles.headerText}>SEARCH</Text>

                <View style={[styles.header, {justifyContent:"space-around", width:150}]}>
                    <Pressable><Image style={[styles.icons, { tintColor: "white" }]} source={require(".././assets/upload_icon.png")} /></Pressable>
                    <Pressable onPress={()=> {setModal(true);setModalText("NOTIFICATIONS")}}><Image style={[styles.icons, { tintColor: "white" }]} source={require(".././assets/bell.png")} /></Pressable>
                    <Pressable onPress={()=> {setModal(true);setModalText("SETTINGS")}}><View style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: "white" }}></View></Pressable>
                </View>

            </View>

            <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : null}>
                <ScrollView style={{flexGrow:1}}>
                    <View style={styles.flat}>
                    <TextInput style={{width:"95%", fontSize:20, fontWeight:"500", paddingHorizontal:20,alignItems:"center",justifyContent:"center" ,height:40,borderRadius:50,borderColor:"white",borderWidth:1, margin:25, backgroundColor:"white", alignSelf:"center"}} value={search} onChangeText={(input) => setSearch(input)} underlineColorAndroid="transparent" placeholder= "Search" renderLeftAcessory={() => (<Image source={require('.././assets/glass.png')} style={{width:30,height:30, tintColor:"white"}}/>)}  autoCapitalize="words"  autoCorrect={true} inputMode="search" numberOfLines={1}/>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.bottomNav}>
            <Pressable
                    onPress={() => {
                       
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
                {({ pressed }) => (
                        <><Image
                            style={[{ width: 40, height: 40, tintColor: 'white' , tintColor: isActive || pressed ? 'orange' : 'white'}]}
                            source={require(".././assets/glass.png")} /><Text style={[styles.texts, {color: isActive || pressed ? 'orange' : 'white' }]}>SEARCH</Text></>
                    )}
                </Pressable>

                <Pressable onPress={() => navigateToScreen("LibraryScreen")}>
                {() => (
                        <><View style={{width:40, height:40,borderRadius:50,marginLeft:15, backgroundColor:"white"}}></View><Text style={styles.texts}>MY LIBRARY</Text></>
                    )}
                </Pressable>
            </View>
            
            {isModal && modalScreen()}
                    
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
      flexDirection:"row",
      backgroundColor:"rgba(128,128,128,0.1)",
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
  
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
        marginLeft:-27,
        fontSize:28,
        fontWeight:"700",
        color:"white"
    },
  
    icons:{
      width:30,
      height:30,
    }
  });

export default SearchScreen;