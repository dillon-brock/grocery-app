import React, { useState } from "react";
import { Pressable, View } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-gesture-handler";

type Props = {
  id: string;
  quantity: string | null;
  item: string;
  handleUpdateQuantity: (id: string, quantity: string) => Promise<void>;
  handleUpdateItem: (id: string, item: string) => Promise<void>;
  handleDeleteItem: (id: string) => Promise<void>;
}

export default function EditableListItem({ id, quantity, item, handleUpdateQuantity, handleUpdateItem, handleDeleteItem }: Props) {

  const [currentQuantity, setCurrentQuantity] = useState<string>(quantity || '');
  const [currentItem, setCurrentItem] = useState<string>(item);

  return (
    <View style={styles.container}>
      <View style={styles.qtyContainer}>
        <TextInput 
          placeholder='amt' 
          value={currentQuantity} 
          onChange={(e) => setCurrentQuantity(e.nativeEvent.text)}
          onBlur={async () => await handleUpdateQuantity(id, currentQuantity)}
          style={styles.input} />
      </View>
      <View style={styles.itemContainer}>
      <TextInput 
          value={currentItem} 
          onChange={(e) => setCurrentItem(e.nativeEvent.text)}
          onBlur={async () => await handleUpdateItem(id, currentItem)}
          style={styles.input} />
      </View>
    </View>
  )
}