import React, { Dispatch } from "react";
import { Pressable, Text, View } from "react-native";
import { updateItem } from "../../../services/list-items/list-items";
import styles from './styles';
import { Ionicons } from "@expo/vector-icons";
import { ListItemsAction } from "../../../reducers/listItems";

type Props = {
  id: string;
  item: string;
  quantity: string | null;
  bought: boolean;
  dispatch: Dispatch<ListItemsAction>;
}

export default function GroceryListItem({ id, item, quantity, bought, dispatch }: Props) {

  const handleToggleBought = async (): Promise<void> => {
    const res = await updateItem(id, { bought: !bought });
    if (res.success) {
      dispatch({ 
        type: 'updated', 
        item: res.listItem, 
        itemId: id 
      });
    }
  }

  return (
    <Pressable onPress={handleToggleBought} style={styles.container}>
      <View style={styles.checkmarkContainer}>
        {bought &&
          <Ionicons name="checkmark-circle-outline" size={18} />
        }
      </View>
      <Text style={styles.text}>{`${quantity} ${item}`}</Text>
    </Pressable>
  )
}