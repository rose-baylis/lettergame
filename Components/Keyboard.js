import React, { useState } from "react"
import { StyleSheet, Text, View, Button, Modal, Pressable } from "react-native"

export default function Keyboard(props) {
  const { setLetterPressed } = props

  const letters = [
    { letter: "a" },
    { letter: "b" },
    { letter: "c" },
    { letter: "d" },
    { letter: "e" },
  ]
  const [modalVisible, setModalVisible] = useState(false)

  const onPress = (e, prop) => {
    console.log("the prop in Keyboard", prop)
    setLetterPressed(prop)
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
    marginRight: 2,
    marginTop: 10,
    padding: 20,
    fontSize: 30,
    color: "#ffff",
    backgroundColor: "#293577",
    borderRadius: 5,
  },
})
