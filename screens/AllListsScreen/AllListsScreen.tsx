import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useAllLists } from "../../hooks/useAllLists";
import { useCheckForLogOut } from "../../hooks/useCheckForLogOut";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton/PrimaryButton";
import { createList } from "../../services/lists/lists";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { List, ListStackParamList } from "../../types/types";
import styles from './styles';
import Header from "../../components/molecules/Header/Header";
import DetailLink from "../../components/molecules/DetailLink/DetailLink";
import ScreenTitle from "../../components/atoms/ScreenTitle/Title";

export default function AllListsScreen() {

  const { lists, errorMessage, setErrorMessage, loading } = useAllLists();
  const navigation = useNavigation<NativeStackNavigationProp<ListStackParamList>>();

  useCheckForLogOut();

  const handleCreateList = async () => {
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
    <>
      <Header showBackButton showMenuButton />
      <View style={styles.container}>
        <ScreenTitle text="Your Lists" color="black" />
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
            handlePress={handleCreateList} />
        </View>
        {lists.length > 0 &&
          <View style={styles.listsContainer}>
            <Text style={styles.subtitle}>Previous lists</Text>
            <ScrollView style={styles.scrollContainer}>
              {lists.map((list: List) => {
                const createdAtFormatted: string = (new Date(list.createdAt)).toDateString();
                const formattedPlaceholderName = `${createdAtFormatted} (${list.id})`;
                const title = list.title ? list.title : formattedPlaceholderName;
                return (
                  <DetailLink key={list.id} id={list.id} text={title} type='List' />
                )
              })}
            </ScrollView>
          </View>
        }
      </View>
    </>
  );
}