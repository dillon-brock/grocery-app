import React, { useState } from "react";
import { View } from "react-native";
import Input from "../Input/Input";

export default function NewItemInput() {

  const [item, setItem] = useState('');

  return (
    <View>
      <Input type="text" value={item} onChange={(e) => setItem(e.nativeEvent.text)} />
      <Input type="number" />
    </View>
  )
}