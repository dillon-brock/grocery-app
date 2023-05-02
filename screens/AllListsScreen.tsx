import React from "react";
import { Text, View } from "react-native";
import { useAllLists } from "../hooks/useAllLists";
import { useCheckForLogOut } from "../hooks/useCheckForLogOut";
import PrimaryButton from "../components/PrimaryButton";
import { createList } from "../services/lists/lists";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import BackButton from "../components/BackButton";

export default function AllListsScreen() {

  const { lists, errorMessage, setErrorMessage, loading } = useAllLists();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useCheckForLogOut();

  const handleNewList = async () => {
    const newListRes = await createList();
    if (newListRes.success) {
      navigation.navigate('ListDetail', 
        { list: { ...newListRes.list, items: [] } });
    }
    else {
      setErrorMessage(`ERR CODE ${newListRes.status}: ${newListRes.message}`);
    }
  }

  return (
    <View>
      <Text>Your Lists</Text>
      <BackButton />
      {lists.length == 0 &&
        <Text>You do not have any lists yet!</Text>
      }
      {errorMessage &&
        <Text>{errorMessage}</Text>
      }
      {loading &&
        <Text>Loading...</Text>
      }
      <PrimaryButton 
        text="Start Shopping"
        handlePress={handleNewList} />
      {lists.length > 0 &&
      <>
        <Text>Previous lists</Text>
        {lists.map(list => {
          return <Text key={list.id}>{list.id}</Text>
        })}
      </>
      }
    </View>
  );
}