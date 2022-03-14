import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { useState } from "react/cjs/react.production.min"
import Letter from "./Letter"

export default function App() {
  const word = ["wine"]
  const numberOfLetters = word[0].length
  const arrayOfLetters = word[0].split("")



  return (
    <View style={styles.container}>
      {arrayOfLetters.map((letter) => {
        return <Letter letter={letter}/>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#192045",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

  }
})
