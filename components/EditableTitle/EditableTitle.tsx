import React, { useEffect, useState } from "react"
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { defaultStyles, categoryStyles, listStyles } from './styles';

type Props = {
  handleUpdateTitle: (title: string) => Promise<void>;
  type: 'category' | 'list';
  title: string;
  locked: boolean;
}

export default function EditableTitle({ title, type, handleUpdateTitle, locked }: Props) {

  const [currentTitle, setCurrentTitle] = useState<string>(title.toUpperCase());

  let styles = defaultStyles;
  if (type == 'category') styles = categoryStyles;
  else if (type == 'list') styles = listStyles;

  useEffect(() => {
    const updateTitle = async () => {
      await handleUpdateTitle(currentTitle);
    }
    updateTitle();
  }, [locked]);

  return (
    <View style={[type == 'category' && styles.outerContainer]}>
      <View style={styles.textContainer}>
        {locked ?
          <Text style={styles.title}>{title}</Text> :
          <TextInput
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.nativeEvent.text)}
            onSubmitEditing={() => handleUpdateTitle(currentTitle)}
            onBlur={() => handleUpdateTitle(currentTitle)}
            style={styles.title} />
        }
      </View>
    </View>
  )
}