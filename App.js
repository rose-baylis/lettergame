import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Letter from "./Components/Letter"
import Letters from "./Components/Letters"
import Keyboard from "./Components/Keyboard"

export default function App() {
  const word = ["wine"]
  const numberOfLetters = word[0].length
  const arrayOfLetters = word[0].split("")


  const [theLetterPressed, setTheLetterPressed] = useState()
  const setLetterPressed = (letter) => {
    console.log("returned to App",letter)
      // setTheLetterPressed(letter[0])
  }


  return (
    <View style={styles.container}>
      <Letters />
      <Keyboard setLetterPressed={setLetterPressed}
 />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#192045",
    alignItems: "center",
    justifyContent: "center",
  }
})
