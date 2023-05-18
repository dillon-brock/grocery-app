import React, { Dispatch, SetStateAction } from "react";
import { Pressable, Text, View } from "react-native";
import { updateItem } from "../../../services/list-items/list-items";
import { ListItem } from "../../../types/types";
import styles from './styles';
import { Ionicons } from "@expo/vector-icons";

type Props = {
  id: string;
  item: string;
  quantity: string | null;
  bought: boolean;
  setItems: Dispatch<SetStateAction<ListItem[]>>;
}

export default function GroceryListItem({ id, item, quantity, bought, setItems }: Props) {

  const handleToggleBought = async (): Promise<void> => {
    const res = await updateItem(id, { bought: !bought });
    if (res.success) {
      setItems(prev => [
        ...prev.filter(item => item.id != id),
        res.listItem
      ])
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