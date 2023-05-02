import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useAllLists } from "../hooks/useAllLists";
import { useCheckForLogOut } from "../hooks/useCheckForLogOut";
import PrimaryButton from "../components/PrimaryButton";
import { createList } from "../services/lists/lists";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { List, RootStackParamList } from "../types/types";
import ListLink from "../components/ListLink";
import { allListsScreenStyles as styles } from "../styles/screens";

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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Lists</Text>
      </View>
      {lists.length == 0 &&
        <Text>You do not have any lists yet!</Text>
      }
      {errorMessage &&
        <Text>{errorMessage}</Text>
      }
      {loading &&
        <Text>Loading...</Text>
      }
      <View style={styles.buttonContainer}>
        <PrimaryButton 
          text="Start Shopping"
          handlePress={handleNewList} />
      </View>
      {lists.length > 0 &&
        <View style={styles.listsContainer}>
          <Text style={styles.subtitle}>Previous lists</Text>
          <ScrollView style={styles.scrollContainer}>
            {lists.map((list: List) => (
              <ListLink key={list.id} list={list} />
            ))}
          </ScrollView>
        </View>
      }
    </View>
  );
}