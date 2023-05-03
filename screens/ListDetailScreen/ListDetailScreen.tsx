import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { ListItem, ListStackParamList } from "../../types/types";
import { useList } from "../../hooks/useList";
import styles from './styles';
import { useMenuContext } from "../../context/MenuContext";
import Menu from "../../components/Menu/Menu";
import NewItemInput from "../../components/NewItemInput/NewItemInput";

export default function ListDetailScreen() {

  const { listId, type } = useRoute<RouteProp<ListStackParamList, 'ListDetail'>>().params;
  const { menuOpen } = useMenuContext();
  const { list, setList, loading, errorMessage } = useList(listId);
  const dateCreated = new Date(list.createdAt).toDateString();

  const placeholderTitle = type == 'new' ? 'New List' : dateCreated;

  return (
    <>
      {menuOpen && <Menu />}
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
              {list.title ? list.title : placeholderTitle}
          </Text>
        </View>
        {errorMessage &&
          <Text>{errorMessage}</Text>
        }
        {loading &&
          <Text>Loading...</Text>
        }
        {list.items?.map((item: ListItem) => (
          <Text>{`${item.item}, ${item.quantity}`}</Text>
        ))}
        <NewItemInput listId={listId} setList={setList} />
      </View>
    </>
  )
}