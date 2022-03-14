import React, { useState } from "react"
import { StyleSheet, Text, View, Button, Modal, Pressable } from "react-native"

export default function Keyboard(props) {
  const { letterPressed } = props

  const [keyboardLetters, setkeyboardLetters]=useState([
    { letter: "a" },
    { letter: "b" },
    { letter: "c" },
    { letter: "d" },
    { letter: "e" },
    { letter: "f" },
    { letter: "g" },
    { letter: "h" },
    { letter: "i" },
    { letter: "j" },
    { letter: "k" },
    { letter: "l" },
    { letter: "m" },
    { letter: "n" },
    { letter: "o" },
    { letter: "p" },
    { letter: "q" },
    { letter: "r" },
    { letter: "s" },
    { letter: "t" },
    { letter: "u" },
    { letter: "v" },
    { letter: "w" },
    { letter: "x" },
    { letter: "y" },
    { letter: "z" },
  ])

  const onPress = (e, prop) => {
    prop.status = "disabled"
    letterPressed(prop)
  }

  return (
    <>
      <View style={styles.container}>
        {keyboardLetters.map((letter) => {
          console.log(letter)
          return (
            <Pressable
              style={styles.keyboardButton}
              onPress={(e) => onPress(e, letter)}
              disabled={letter.status === "disabled" ? true : false}
            >
              <Text
                style={
                  letter.status === "disabled"
                    ? styles.disabled
                    : styles.keyboardLetter
                }
              >
                {letter.letter}
              </Text>
            </Pressable>
          )
        })}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#192045",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  keyboardButton: {
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 2,
    padding: 15,
    backgroundColor: "#293577",
    // borderRadius: 10,
    // color: "#ffff",
  },
  disabled: {
    color: "#5362B1",
    fontSize: 18,
  },
  keyboardLetter: {
    color: "#ffff",
    fontSize: 18,
  },
})
