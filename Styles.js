import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#000000"
    },
  
    answer:{
      flex:1,
      alignItems:"flex-end",
      justifyContent:"flex-end",
      paddingRight:10,
    },
    
    keys:{
      flex:2,
      marginBottom:20
    },
  
    boxes:{
      flexDirection:"row",
      padding:10,
      justifyContent:"space-between"
    },
  
    press:{
      width:80,
      height:80,
      borderRadius:50,
      backgroundColor: "rgba(128,128,128,0.4)",
      alignItems:"center",
      justifyContent:"center"
    },
  
  
    ans:{
      fontSize:100,
      color:"white",
      fontWeight:"400",
    },
  
    texts:{
      fontSize: 40,
      color:"white",
      textAlign:"center",
      fontWeight:"bold"
    },
  
    zero:{
      width:180,
      alignItems:"flex-start",
      paddingLeft:30
    },
  
    operators:{
      backgroundColor:"orange",
      
    },
  
    otherOperators:{
      backgroundColor:"rgba(128,128,128,0.8)"
    }
  
  });


  export default styles;