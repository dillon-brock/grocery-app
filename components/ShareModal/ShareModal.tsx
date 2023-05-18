import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { modalStyles } from "../../styles/universal";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  title: string;
  handleShare: (editable: boolean) => Promise<void>;
}

export default function ShareModal({ visible, setVisible, title, handleShare }: Props) {

  const [editable, setEditable] = useState<boolean>(false);

  return (
    <Modal
    visible={visible}
    transparent={true}
    onRequestClose={() => {
      setVisible(prev => !prev);
    }}>
      <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.title}>Share {title}</Text>
            <View>
              <Text>Permissions</Text>
              <View>
                <Pressable onPress={() => setEditable(prev => !prev)}>
                  <Text>Edit:</Text>
                </Pressable>
                <Text>{editable}</Text>
              </View>
            </View>
            <View>
              <Pressable>
                <Text>Cancel</Text>
              </Pressable>
              <Pressable onPress={() => handleShare(editable)}>
                <Text>Share</Text>
              </Pressable>
            </View>
          </View>
        </View>

    </Modal>
  )
}