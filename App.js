import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

import styles from './Styles';



export default function App() {

  const [number, setNumber] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const Evaluation = () => {
    try{const solution = eval(number);
      if (solution != "Infinity"){console.log(solution),setNumber(solution)}else{Alert.alert("Syntax Error", "YOU CAN'T DIVIDE BY ZERO!"); setNumber(" ")};}
      catch{
      Alert.alert(title="Error", "Syntax Error"), setNumber(" ")
    }
  }

  const clear = () => {
    if (number !== ""){
        setNumber((prevNum) => {
          const newArray = [...prevNum];
          newArray.pop(); // 
        return newArray.join(""); 
        });}
    else{setNumber("")}
  };

 
  
  const buttonHandler = (value) => {
    if (value === "="){
      Evaluation();
    } else if (value === "AC"){
      setNumber(" ");
    }else if(value === "C"){
      clear();
    } else{
      setNumber((prevNum) => prevNum + value)
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.answer}>
        <Text style={styles.ans} adjustsFontSizeToFit={true}  numberOfLines={1}>{number}</Text>
      </View>

      <View style={styles.keys}>

        <View style={styles.boxes}>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={() => buttonHandler("AC")} style={({pressed}) => [styles.press, styles.otherOperators, {backgroundColor: pressed ? 'rgba(128,128,128,0.5)' : 'rgba(128,128,128,0.8)'} ]}><Text style={styles.texts}>AC</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("C")} style={({pressed}) => [styles.press, styles.otherOperators, {backgroundColor: pressed ? 'rgba(128,128,128,0.5)' : 'rgba(128,128,128,0.8)'} ]}><Text style={styles.texts}>C</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("%")} style={({pressed}) => [styles.press, styles.otherOperators, {backgroundColor: pressed ? 'rgba(128,128,128,0.5)' : 'rgba(128,128,128,0.8)'} ]}><Text style={styles.texts}>%</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("/")} style={({pressed}) => [styles.press, styles.operators, {backgroundColor: pressed ? 'rgba(255, 165, 0, 0.5)' : 'orange'}]}><Text style={styles.texts}>/</Text></Pressable>
        </View>

        <View  style={styles.boxes}>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("7")} style={({pressed}) => [styles.press, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>7</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("8")} style={({pressed}) => [styles.press, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>8</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("9")} style={({pressed}) => [styles.press, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>9</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("*")} style={({pressed}) => [styles.press, styles.operators, {backgroundColor: pressed ? 'rgba(255, 165, 0, 0.5)' : 'orange'}]}><Text style={styles.texts}>*</Text></Pressable>
        </View>

        <View  style={styles.boxes}>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("4")} style={({pressed}) => [styles.press, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>4</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("5")} style={({pressed}) => [styles.press, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>5</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("6")} style={({pressed}) => [styles.press, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>6</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("-")} style={({pressed}) => [styles.press, styles.operators, {backgroundColor: pressed ? 'rgba(255, 165, 0, 0.5)' : 'orange'}]}><Text style={styles.texts}>-</Text></Pressable>
        </View>

        <View  style={styles.boxes}>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("1")} style={({pressed}) => [styles.press, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>1</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("2")} style={({pressed}) => [styles.press, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>2</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("3")} style={({pressed}) => [styles.press, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>3</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("+")} style={({pressed}) => [styles.press, styles.operators, {backgroundColor: pressed ? 'rgba(255, 165, 0, 0.5)' : 'orange'}]}><Text style={styles.texts}>+</Text></Pressable>
        </View>

        <View  style={styles.boxes}>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("0")} style={({pressed}) => [styles.press, styles.zero, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>0</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler(".")} style={({pressed}) => [styles.press, {backgroundColor: pressed ? "rgba(182,128,128,0.3)" : "rgba(128,128,128,0.4)"}]}><Text style={styles.texts}>.</Text></Pressable>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}  onPress={() => buttonHandler("=")} style={({pressed}) => [styles.press, styles.operators, {backgroundColor: pressed ? 'rgba(255, 165, 0, 0.5)' : 'orange'}]}><Text style={styles.texts}>=</Text></Pressable>
        </View>

      </View>
      
    </View>
  );
}


