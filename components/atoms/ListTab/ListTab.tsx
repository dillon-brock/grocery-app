import React, { Dispatch, SetStateAction } from "react";
import { Pressable, Text, View } from "react-native";
import styles from './styles'

type Props = {
  name: string;
  id: number;
  setActiveId: Dispatch<SetStateAction<number>>;
  activeId: number;
}

export default function ListTab({ name, id, setActiveId, activeId }: Props) {

  const selected: boolean = activeId == id;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setActiveId(id)} style={[styles.tab, selected && styles.active]}>
        <Text style={styles.name}>{name}</Text>
      </Pressable>
    </View>
  )
}