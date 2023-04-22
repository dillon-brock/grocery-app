import { StyleSheet, Text, View } from "react-native";

export default function SignUp() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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