import React, { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { ListStackParamList } from "../../types/types";
import { useList } from "../../hooks/useList";
import styles from './styles';
import { useMenuContext } from "../../context/MenuContext";
import Menu from "../../components/Menu/Menu";
import GroceryList from "../../components/GroceryList/GroceryList";
import IconButton from "../../components/IconButton/IconButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import NewCategoryModal from "../../components/NewCategoryModal/NewCategoryModal";
import Header from "../../components/Header/Header";

export default function ListDetailScreen() {

  const { listId, type } = useRoute<RouteProp<ListStackParamList, 'ListDetail'>>().params;
  const { menuOpen } = useMenuContext();
  const { list, setList, loading, errorMessage } = useList(listId);
  const [editable, setEditable] = useState<boolean>(false);
  const [userWantsToAddCategory, setUserWantsToAddCategory] = useState<boolean>(false);
  const dateCreated = new Date(list.createdAt).toDateString();

  const placeholderTitle = type == 'new' ? 'New List' : dateCreated;

  const handleAddCategory = () => {
    setUserWantsToAddCategory(true);
  }

  return (
    <View style={styles.pageContainer}>
      <Header showBackButton showMenuButton />
      {menuOpen && <Menu />}
      <View style={styles.lockButtonContainer}>
        <IconButton 
          name={editable ? 'lock-closed' : 'lock-open'} 
          handlePress={() => setEditable(prev => !prev)} 
          />
      </View>
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
          <GroceryList list={list} setList={setList} loading={loading} editable={editable} />
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