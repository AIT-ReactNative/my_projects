import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>

        <View>
          <Image />
        </View>

        <View>
          <Text style={styles.texts}>DISCOVER</Text>
        </View>

        <View>

        </View>

      </View>

      <FlatList style={styles.flat}/>


      <View style={styles.bottomNav}>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  flat:{
    flex:2
  },

  bottomNav:{
    flex:1
  },

  texts:{
    fontSize: 30
  }
});
