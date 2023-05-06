import React, { Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";
import Input from "../Input/Input";
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
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddItem = async (): Promise<void> => {
    const addItemRes = await addItemToList({ 
      listId, 
      item, 
      quantity: quantity > 0 ? quantity : null,
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
      setQuantity(1);
    }
  }

  return (
    <View>
      <Input type="text" value={item} onChange={(e) => setItem(e.nativeEvent.text)} />
      <Input type="number" value={quantity > 0 ? String(quantity) : ''} onChange={(e) => setQuantity(Number(e.nativeEvent.text))}/>
      <IconButton name="add-circle" handlePress={handleAddItem} />
    </View>
  )
}