import React, { useState } from "react"
import { StyleSheet, Text, View, Button, Modal, Pressable } from "react-native"

export default function Keyboard(props) {
  const { setTheLetterPressed, handleLetter, keyboardLetters } = props

  const onPress = (e, prop) => {
    prop.status = "disabled"
    handleLetter(prop.letter)
  }

  return (
    <>
      <View style={styles.container}>
        {keyboardLetters.map((letter, i) => {
          return (
            <Pressable
              style={styles.keyboardButton}
              onPress={(e) => onPress(e, letter)}
              disabled={letter.status === "disabled" ? true : false}
              key={i}
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
    // backgroundColor: '#212959'
  },
  keyboardLetter: {
    color: "#ffff",
    fontSize: 18,
  },
})
