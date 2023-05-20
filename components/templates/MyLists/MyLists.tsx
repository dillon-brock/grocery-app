import React from "react";
import { ScrollView, Text, View } from "react-native";
import ScreenTitle from "../../atoms/ScreenTitle/Title";
import PrimaryButton from "../../atoms/buttons/PrimaryButton/PrimaryButton";
import { useAllLists } from "../../../hooks/useAllLists";
import styles from './styles';
import { createList } from "../../../services/lists/lists";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { List, ListStackParamList } from "../../../types/types";
import DetailLink from "../../molecules/DetailLink/DetailLink";

type Props = {
  activeTabId: number;
}

export default function MyLists({ activeTabId }: Props) {

  const { lists, errorMessage, setErrorMessage, loading } = useAllLists(activeTabId);
  const navigation = useNavigation<NativeStackNavigationProp<ListStackParamList>>();

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

  if (activeTabId == 1) {
    return (
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
    )
  }
  else {
    return <></>;
  }
}