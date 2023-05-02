import React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { useAllLists } from "../hooks/useAllLists";
import { useCheckForLogOut } from "../hooks/useCheckForLogOut";
import PrimaryButton from "../components/PrimaryButton";
import { createList } from "../services/lists/lists";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { List, RootStackParamList } from "../types/types";
import ListLink from "../components/ListLink";

export default function AllListsScreen() {

  const { lists, errorMessage, setErrorMessage, loading } = useAllLists();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useCheckForLogOut();

  const handleNewList = async () => {
    const newListRes = await createList();
    if (newListRes.success) {
      navigation.navigate('ListDetail', 
        { listId: newListRes.list.id,
          type: 'new' 
        });
    }
    else {
      setErrorMessage(`ERR CODE ${newListRes.status}: ${newListRes.message}`);
    }
  }

  return (
    <View>
      <Text>Your Lists</Text>
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
        <FlatList 
          data={lists} 
          renderItem={({ item: list }: ListRenderItemInfo<List>) => (
            <ListLink 
              list={list}
            />)}
          keyExtractor={(list: List) => list.id}
        />
      </>
      }
    </View>
  );
}