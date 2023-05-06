import React, { Dispatch, SetStateAction, useState } from "react";
import { TextInput, View } from "react-native";
import IconButton from "../IconButton/IconButton";
import { addItemToList } from "../../services/list-items/list-items";
import { ListWithDetail } from "../../types/types";

type Props = {
  listId: string;
  categoryId: string;
  setList: Dispatch<SetStateAction<ListWithDetail>>
}

export default function NewItemInput({ listId, setList, categoryId }: Props) {

  const [item, setItem] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');

  const handleAddItem = async (): Promise<void> => {
    const addItemRes = await addItemToList({ 
      listId, 
      item, 
      quantity: quantity || null,
      categoryId
    });

    if (addItemRes.success) {
      setList((prev: ListWithDetail) => {
        const category = prev.categories.find(c => c.id == categoryId);
        if (!category) return prev;
        const updatedCategory = { 
          ...category, 
          items: [ 
            ...category.items, 
            addItemRes.listItem 
          ]
        }

        return { 
          ...prev,
          categories: [
            ...prev.categories.filter(c => c.id != categoryId),
            updatedCategory
          ]
        }
      });
      setItem('');
      setQuantity('');
    }
  }

  return (
    <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>
      <View style={{ width: '15%', borderRightColor: 'gray', borderRightWidth: 1, paddingLeft: 10 }}>
        <TextInput 
          placeholder='amt' 
          value={quantity} 
          onChange={(e) => setQuantity(e.nativeEvent.text)}
          style={{ width: '100%', borderWidth: 0 }} />
      </View>
      <View style={{ width: '70%', paddingLeft: 10 }}>
      <TextInput 
          placeholder='item' 
          value={item} 
          onChange={(e) => setItem(e.nativeEvent.text)}
          style={{ width: '100%', borderWidth: 0 }} />
      </View>
      <View>
        <IconButton name="add-circle" handlePress={handleAddItem} size={32} />
      </View>
    </View>
  )
}