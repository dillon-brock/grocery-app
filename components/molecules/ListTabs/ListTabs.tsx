import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import ListTab from "../../atoms/ListTab/ListTab";

type Props = {
  activeId: number;
  setActiveId: Dispatch<SetStateAction<number>>;
}

export default function ListTabs({ activeId, setActiveId }: Props) {

  return (
    <View style={{ flexDirection: 'row'}}>
      <ListTab name="My Lists" setActiveId={setActiveId} activeId={activeId} id={1} />
      <ListTab name="Shared with me" setActiveId={setActiveId} activeId={activeId} id={2} />
    </View>
  )
}