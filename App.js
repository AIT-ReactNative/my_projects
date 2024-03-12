import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>

        <View>

        </View>

        <View>
          <Text style={styles.texts}>DISCOVER</Text>
        </View>

        <View>

        </View>

      </View>

      <FlatList>

      </FlatList>

      <View>

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

  texts:{
    fontSize: 30
  }
});
