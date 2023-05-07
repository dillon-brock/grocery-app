import React, { useState } from "react";
import { View } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-gesture-handler";

type Props = {
  id: string;
  quantity: string;
  item: string;
}

export default function EditableListItem({ id, quantity, item }: Props) {

  const [currentQuantity, setCurrentQuantity] = useState<string>(quantity);
  const [currentItem, setCurrentItem] = useState<string>(item);

  return (
    <View>
      <View style={styles.qtyContainer}>
        <TextInput 
          placeholder='amt' 
          value={quantity} 
          onChange={(e) => setCurrentQuantity(e.nativeEvent.text)}
          style={styles.input} />
      </View>
      <View style={styles.itemContainer}>
      <TextInput 
          placeholder='item' 
          value={item} 
          onChange={(e) => setCurrentItem(e.nativeEvent.text)}
          style={styles.input} />
      </View>
    </View>
  )
}