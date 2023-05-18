import React, { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Keyboard, Pressable, Text, TouchableWithoutFeedback, View } from "react-native";
import { HomeStackParamList, ListStackParamList } from "../../types/types";
import { useList } from "../../hooks/useList";
import styles from './styles';
import GroceryList from "../../components/GroceryList/GroceryList";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import NewCategoryModal from "../../components/NewCategoryModal/NewCategoryModal";
import Header from "../../components/Header/Header";
import LockButton from "../../components/LockButton/LockButton";
import EditableTitle from "../../components/EditableTitle/EditableTitle";
import { updateList } from "../../services/lists/lists";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function ListDetailScreen() {

  const { listId, type } = useRoute<RouteProp<ListStackParamList, 'ListDetail'>>().params;
  const { list, setList, categories, loading, errorMessage } = useList(listId);
  const [locked, setLocked] = useState<boolean>(true);
  const [userWantsToAddCategory, setUserWantsToAddCategory] = useState<boolean>(false);
  const dateCreated = new Date(list.createdAt).toDateString();
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const placeholderTitle = type == 'new' ? 'New List' : dateCreated;

  const handleAddCategory = () => {
    setUserWantsToAddCategory(true);
  }

  const handleUpdateTitle = async (title: string): Promise<void> => {
    const res = await updateList(list.id, { title });
    if (res.success) {
      setList(prev => ({ ...prev, title }))
    }
  }

  const goToShareScreen = () => {
    navigation.navigate('Share', {
      id: list.id,
      name: list.title || placeholderTitle,
      type: 'list'
    });
  }

  return (
    <View style={styles.pageContainer}>
      <Header showBackButton showMenuButton />
      <LockButton locked={locked} setLocked={setLocked} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Pressable onPress={goToShareScreen}>
            <Text>Share</Text>
          </Pressable>
          <EditableTitle
            type='list'
            title={list.title ? list.title : placeholderTitle}
            locked={locked}
            handleUpdateTitle={handleUpdateTitle}
          />
          {errorMessage &&
            <Text>{errorMessage}</Text>
          }
          {loading &&
            <Text>Loading...</Text>
          }
          <GroceryList 
            list={list} 
            categories={categories}
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