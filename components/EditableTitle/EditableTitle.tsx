import React, { useEffect, useState } from "react"
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { categoryStyles } from './styles';

type Props = {
  handleUpdateTitle: () => Promise<void>;
  type: string;
  title: string;
  locked: boolean;
}

export default function EditableTitle({ title, type, handleUpdateTitle, locked }: Props) {

  const [currentTitle, setCurrentTitle] = useState<string>(title.toUpperCase());

  useEffect(() => {
    const updateTitle = async () => {
      await handleUpdateTitle();
    }
    updateTitle();
  }, [locked]);

  return (
    <View style={type == 'category' && categoryStyles.outerContainer}>
      <View style={type == 'category' && categoryStyles.textContainer}>
        {locked ?
          <Text style={type == 'category' && categoryStyles.title}>{title}</Text> :
          <TextInput
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.nativeEvent.text)}
            onSubmitEditing={handleUpdateTitle}
            onBlur={handleUpdateTitle}
            style={type == 'category' && categoryStyles.title} />
        }
      </View>
    </View>
  )
}