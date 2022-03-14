import React, { useState } from "react"
import { StyleSheet, Text, View, Button, Modal, Pressable } from "react-native"

export default function Keyboard(props) {
  const { letterPressed } = props

  const letters = [
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
  ]
  const [modalVisible, setModalVisible] = useState(false)

  const onPress = (e, prop) => {
    // console.log("the prop in Keyboard", prop)
    letterPressed(prop)
  }
  return (
    <>
      <View style={styles.container}>
        {letters.map((letter) => {
          return (
            <Text
              style={styles.keyboardButton}
              name="bleh"
              onPress={(e) => onPress(e, letter)}
            >
              {letter.letter}
            </Text>
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
    marginRight:2,
    marginTop: 2,
    marginBottom: 2,
    padding: 20,
    fontSize: 20,
    color: "#ffff",
    backgroundColor: "#293577",
    // borderRadius: 10,
  },
})
