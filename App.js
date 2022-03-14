import React, { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Letter from "./Components/Letter"
import Letters from "./Components/Letters"
import Keyboard from "./Components/Keyboard"

export default function App() {
  const [word, setWord] = useState(["wine"])

  const [arrayOfLetters, setArrayOfLetters] = useState(word[0].split(""))

  const [theLetterPressed, setTheLetterPressed] = useState()

  const reset = () => {
    console.log("reset pressed")
    setArrayOfLetters(word[0].split(""))
    setTheLetterPressed()
  }

  const letterPressed = (letter) => {
    console.log("returned to App", letter)
    setTheLetterPressed(letter.letter)
 }

 useEffect(() => {
    const found = arrayOfLetters.find(letter=> letter===theLetterPressed)
    const newArr = arrayOfLetters.filter(letter => letter !== found)
    setArrayOfLetters(newArr)
  },[theLetterPressed])


  return (
    <View style={styles.container}>

      <Letters letters={arrayOfLetters} />
      <Text style={styles.button} onPress={reset}>Reset</Text>
      <Keyboard letterPressed={letterPressed} />
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
    color: '#fff'
  },
  button:{
    color: '#99A3D9',
    padding:10,
    fontSize:16
    
  }
})
