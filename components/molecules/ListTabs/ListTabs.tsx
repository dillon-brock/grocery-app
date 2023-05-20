import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import ListTab from "../../atoms/ListTab/ListTab";

type Props = {
  setActiveId: Dispatch<SetStateAction<number>>;
}

export default function ListTabs({ setActiveId }: Props) {

  return (
    <View>
      <ListTab name="My Lists" setActiveId={setActiveId} id={1} />
      <ListTab name="Shared with me" setActiveId={setActiveId} id={2} />
    </View>
  )
}