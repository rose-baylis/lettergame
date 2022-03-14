import React, { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Letter from "./Components/Letter"
import Letters from "./Components/Letters"
import Keyboard from "./Components/Keyboard"

export default function App() {
  const [word, setWord] = useState(["wine"])
  const numberOfLetters = word[0].length
  // const arrayOfLetters = word[0].split("")

  const [arrayOfLetters, setArrayOfLetters] = useState(word[0].split(""))

  const [theLetterPressed, setTheLetterPressed] = useState()

  const reset = () => {
    console.log("reset pressed")
    setWord(["wine"])
  }

  const setLetterPressed = (letter) => {
    console.log("returned to App", letter)
    
    setTheLetterPressed(letter.letter)
   
    const found = arrayOfLetters.find(letter=> letter===theLetterPressed)
    const newArr = arrayOfLetters.filter(letter => letter !== found)
    setArrayOfLetters(newArr)

    
    // arrayOfLetters.forEach(letter => {
    //   if(letter === theLetterPressed){
    //     console.log("a match", letter)
        // const newArr = arrayOfLetters.filter(letter => letter === theLetterPressed)
        // setArrayOfLetters(newArr)
        
      // }
    // })
 }



  return (
    <View style={styles.container}>

      <Letters letters={arrayOfLetters} />
      <Text onPress={reset}>Reset</Text>

      <Keyboard setLetterPressed={setLetterPressed} />
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
})
