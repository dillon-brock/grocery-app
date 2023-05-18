import React, { Dispatch, SetStateAction } from 'react';
import { View } from "react-native";
import IconButton from '../IconButton/IconButton';
import styles from './styles'

type Props = {
  locked: boolean;
  setLocked: Dispatch<SetStateAction<boolean>>;
}

export default function LockButton({ locked, setLocked }: Props) {
  return (
    <View style={styles.container}>
      <IconButton 
          name={locked ? 'lock-open' : 'lock-closed'} 
          handlePress={() => setLocked(prev => !prev)} 
          />
    </View>
  )
}