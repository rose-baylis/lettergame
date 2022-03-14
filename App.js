import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  const word = ["wine"]
  const numberOfLetters = word[0].length
  const arrayOfLetters = word[0].split("")
  return (
    <View style={styles.container}>
      <Text>Hi Rose</Text>
      {arrayOfLetters.map((letter) => {
        return <Text>{letter}</Text>
      })}

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
