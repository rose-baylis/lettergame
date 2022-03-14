import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function letter(props) {
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
    backgroundColor: "#192045",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  letter:{
    color: '#99A3D9',
    fontSize: 40,
    // padding: 10,
    // width:100,
    textDecorationLine: 'underline'
  },
})
