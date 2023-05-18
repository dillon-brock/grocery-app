import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { modalStyles } from "../../styles/universal";
import { shareList } from "../../services/list-shares/list-shares";
import ShareSuccessDisplay from "../ShareSuccessDisplay/ShareSuccessDisplay";

enum ShareStatus {
  'success',
  'error',
  'none'
}

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  title: string;
  userId: string;
  listId: string;
}

export default function ShareModal({ visible, setVisible, title, userId, listId }: Props) {

  const [editable, setEditable] = useState<boolean>(false);
  const [shareStatus, setShareStatus] = useState<ShareStatus>(ShareStatus.none);
  const [error, setError] = useState('');

  const handleShare = async (): Promise<void> => {
    const res = await shareList({ userId, listId, editable });
    if (res.success) {
      setShareStatus(ShareStatus.success);
    }
    else {
      setShareStatus(ShareStatus.error);
      setError(res.message);
    }
  }

  return (
    <Modal
    visible={visible}
    transparent={true}
    onRequestClose={() => {
      setVisible(prev => !prev);
    }}>
      <View style={modalStyles.centeredView}>
        <View style={modalStyles.modalView}>
          {shareStatus == ShareStatus.success ?
            <ShareSuccessDisplay 
              title={title} 
              setVisible={setVisible} />
            :
            <>
              <Text style={modalStyles.title}>Share {title}</Text>
              {shareStatus == ShareStatus.error && 
                <Text>{error}</Text>
              }
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
                <Pressable onPress={() => setVisible(prev => !prev)}>
                  <Text>Cancel</Text>
                </Pressable>
                <Pressable onPress={handleShare}>
                  <Text>Share</Text>
                </Pressable>
              </View>
            </>
          }
        </View>
      </View>
    </Modal>
  )
}