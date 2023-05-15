import React, { useState } from "react";
import { TextInput, View } from "react-native";

import IconButton from "../IconButton/IconButton";
import styles from './styles';

type Props = {
  handleAdd: (item: string, quantity: string) => Promise<void> 
}

export default function NewItemInput({ handleAdd }: Props) {

  const [item, setItem] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');

  const addItem = async (): Promise<void> => {
    await handleAdd(item, quantity);
    setItem('');
    setQuantity('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.qtyContainer}>
        <TextInput 
          placeholder='amt' 
          value={quantity} 
          onChange={(e) => setQuantity(e.nativeEvent.text)}
          style={styles.input} />
        </View>
      <View style={styles.itemContainer}>
      <TextInput 
          placeholder='item' 
          value={item} 
          onChange={(e) => setItem(e.nativeEvent.text)}
          style={styles.input} />
      </View>
      <View>
        <IconButton name="add-circle" handlePress={addItem} />
      </View>
    </View>
  )
}