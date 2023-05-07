import React, { Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-gesture-handler";
import { updateItem } from "../../services/list-items/list-items";
import { ListWithDetail } from "../../types/types";
import { updateItemInState } from "../../utils";

type Props = {
  id: string;
  quantity: string | null;
  item: string;
  categoryId: string;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
}

export default function EditableListItem({ id, quantity, item, categoryId, setList }: Props) {

  const [currentQuantity, setCurrentQuantity] = useState<string>(quantity || '');
  const [currentItem, setCurrentItem] = useState<string>(item);

  const handleUpdateQuantity = async () => {
    const updateRes = await updateItem(id, { quantity: currentQuantity });
    if (updateRes.success) {
      setList(prev => {
        const newListState = updateItemInState({
          prev,
          categoryId,
          itemId: id,
          prop: 'quantity',
          val: currentQuantity || null
        });
        
        return newListState;
      })
    }
  }

  const handleUpdateItem = async () => {
    const updateRes = await updateItem(id, { item: currentItem });
    if (updateRes.success) {
      setList(prev => {
        const newListState = updateItemInState({
          prev,
          categoryId,
          itemId: id,
          prop: 'item',
          val: currentItem
        });

        return newListState;
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.qtyContainer}>
        <TextInput 
          placeholder='amt' 
          value={currentQuantity} 
          onChange={(e) => setCurrentQuantity(e.nativeEvent.text)}
          onBlur={handleUpdateQuantity}
          style={styles.input} />
      </View>
      <View style={styles.itemContainer}>
      <TextInput 
          value={currentItem} 
          onChange={(e) => setCurrentItem(e.nativeEvent.text)}
          onBlur={handleUpdateItem}
          style={styles.input} />
      </View>
    </View>
  )
}