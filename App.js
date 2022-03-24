import React, { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Letter from "./Components/Letter"
import Letters from "./Components/Letters"
import Keyboard from "./Components/Keyboard"
import defaultKeyboard from './keyboardLetters.json'

export default function App() {
  const [won, setWon] = useState(false)
  const [word, setWord] = useState("plant")

  // Make an array, filled with each letter of the word
  const [toCheckAgainst, setToCheckAgainst] = useState(word.split(""))

  // Make an array to populate the UI with blank spaces. When a letter matches we add to this array
  const [lettersToPopulate, setLettersToPopulate] = useState([...toCheckAgainst].fill(''))

  // Make a deep copy of the imported data
  const keyboardData = JSON.parse(JSON.stringify(defaultKeyboard))
  const [keyboardLetters, setKeyboardLetters] = useState(keyboardData)

const handleLetterPress = (pressedLetter) => {
  const newArr = [...lettersToPopulate]
     toCheckAgainst.forEach((letter, index) =>{
        if(letter===pressedLetter){
          newArr[index] = letter
        }
      })
     setLettersToPopulate(newArr)
     checkWin(newArr, toCheckAgainst)
}

  const checkWin = (arr1, arr2) => {
    for (var i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) return false;
    }
    alert("you won!")
    setWon(true)
    reset()
    }
   

  //Reset hooks
  const reset = () => {
    setLettersToPopulate([...toCheckAgainst].fill(''))
    setKeyboardLetters(JSON.parse(JSON.stringify(defaultKeyboard)))
  }

  return (
    <View style={styles.container}>
      <Letters letters={lettersToPopulate} />
      <Text style={styles.button} onPress={reset}>Reset</Text>
      <Keyboard  handleLetterPress={handleLetterPress} keyboardLetters={keyboardLetters} />
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
