import React, { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { ListStackParamList } from "../../types/types";
import { useList } from "../../hooks/useList";
import styles from './styles';
import GroceryList from "../../components/GroceryList/GroceryList";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import NewCategoryModal from "../../components/NewCategoryModal/NewCategoryModal";
import Header from "../../components/Header/Header";
import LockButton from "../../components/LockButton/LockButton";

export default function ListDetailScreen() {

  const { listId, type } = useRoute<RouteProp<ListStackParamList, 'ListDetail'>>().params;
  const { list, setList, categories, setCategories, loading, errorMessage } = useList(listId);
  const [locked, setLocked] = useState<boolean>(true);
  const [userWantsToAddCategory, setUserWantsToAddCategory] = useState<boolean>(false);
  const dateCreated = new Date(list.createdAt).toDateString();

  const placeholderTitle = type == 'new' ? 'New List' : dateCreated;

  const handleAddCategory = () => {
    setUserWantsToAddCategory(true);
  }

  return (
    <View style={styles.pageContainer}>
      <Header showBackButton showMenuButton />
      <LockButton locked={locked} setLocked={setLocked} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
          <GroceryList 
            list={list} 
            setList={setList} 
            categories={categories}
            setCategories={setCategories} 
            loading={loading} 
            locked={locked} />
          <SecondaryButton text='+ ADD CATEGORY' handlePress={handleAddCategory}/>
          <NewCategoryModal 
            visible={userWantsToAddCategory} 
            setVisible={setUserWantsToAddCategory}
            listId={list.id}
            setList={setList}
            />
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}