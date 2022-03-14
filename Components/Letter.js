import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function Letter(props) {
  const { letter } = props
  return (
    <View style={styles.container}>
      <Text style={styles.letter}>{letter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth:3,
    borderBottomColor: "#99A3D9",
    padding:10,
    margin:10,
    minHeight:70

  },
  letter: {
    color: "#99A3D9",
    fontSize: 40,
  },
})
