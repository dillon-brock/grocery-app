import { StyleSheet, Text, View } from "react-native";

export default function LogIn() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Avenir-Oblique'
  }
})