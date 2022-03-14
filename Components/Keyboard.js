import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Button } from "react-native"

export default function Keyboard(props) {
  const letters = [{letter:'a'},{letter:'b'},{letter:'c'}]
  return (
    <View style={styles.container}>
      
      {letters.map((letter) => {
        return <Button title={letter.letter} />
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
  },
  letter:{
    color: '#99A3D9',
    fontSize: 40,
    // padding: 10,
    // width:100,
    textDecorationLine: 'underline'
  },
})
