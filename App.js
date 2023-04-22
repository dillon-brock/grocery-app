import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthEntry from './components/AuthEntry';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Entry"
          component={AuthEntry}/>
        <Stack.Screen
          name="Login"
          component={LogIn}/>
        <Stack.Screen
          name="Sign Up"
          component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
