import React, { Dispatch, SetStateAction } from "react";
import { Pressable, Text } from "react-native";

type Props = {
  name: string;
  id: number;
  setActiveId: Dispatch<SetStateAction<number>>;
}

export default function ListTab({ name, id, setActiveId }: Props) {

  return (
    <Pressable onPress={() => setActiveId(id)}>
      <Text>{name}</Text>
    </Pressable>
  )
}