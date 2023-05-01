import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../context/UserContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

export function useCheckForLogOut() {
  const { user, doneGettingUser }  = useUserContext();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  if (!user && doneGettingUser) {
    navigation.navigate('Entry');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Entry' }]
    })
  }
}