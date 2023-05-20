import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { modalStyles } from "../../../styles/universal";
import { shareList } from "../../../services/list-shares/list-shares";
import ShareSuccessDisplay from "../../molecules/ShareSuccessDisplay/ShareSuccessDisplay";
import { ShareStatus } from "../../../types/types";
import styles from './styles';
import { shareRecipe } from "../../../services/recipe-shares/recipe-shares";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  title: string;
  userId: string;
  elementId: string;
  type: 'recipe' | 'list';
}

export default function ShareModal({ visible, setVisible, title, userId, elementId, type }: Props) {

  const [editable, setEditable] = useState<boolean>(false);
  const [shareStatus, setShareStatus] = useState<ShareStatus>(ShareStatus.none);
  const [error, setError] = useState('');

  const formattedType = type.slice(0, 1).toUpperCase() + type.slice(1);

  const handleShareList = async (): Promise<void> => {
    const res = await shareList({ userId, listId: elementId, editable });
    if (res.success) {
      setShareStatus(ShareStatus.success);
    }
    else {
      setShareStatus(ShareStatus.error);
      setError(res.message);
    }
  }

  const handleShareRecipe = async (): Promise<void> => {
    const res = await shareRecipe({ userId, recipeId: elementId, editable });
    if (res.success) {
      setShareStatus(ShareStatus.success);
    }
    else {
      setShareStatus(ShareStatus.error);
      setError(res.message);
    }
  }

  let handleShare = async (): Promise<void> => {null};
  if (type == 'list') handleShare = handleShareList;
  else if (type == 'recipe') handleShare = handleShareRecipe;

  return (
    <Modal
    visible={visible}
    transparent={true}
    onRequestClose={() => {
      setVisible(prev => !prev);
    }}>
      <View style={modalStyles.centeredView}>
        <View style={[modalStyles.modalView, styles.modalView]}>
          {shareStatus == ShareStatus.success ?
            <ShareSuccessDisplay
              type={type}
              title={title} 
              setVisible={setVisible}
              setShareStatus={setShareStatus} />
            :
            <>
              <Text style={modalStyles.title}>{`Share ${formattedType}`}</Text>
              {shareStatus == ShareStatus.error && 
                <Text>{error}</Text>
              }
              <View style={styles.section}>
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>Permissions</Text>
                </View>
                <View style={styles.permissionsContainer}>
                  <Pressable onPress={() => setEditable(prev => !prev)}>
                    <Text style={styles.subtitle}>Edit:</Text>
                  </Pressable>
                  <Text>{`${editable}`}</Text>
                </View>
              </View>
              <View style={modalStyles.buttonsContainer}>
                <Pressable 
                onPress={() => setVisible(prev => !prev)} 
                style={[modalStyles.button, modalStyles.cancelButton]}>
                  <Text style={[modalStyles.buttonText, modalStyles.cancelButtonText]}>Cancel</Text>
                </Pressable>
                <Pressable 
                onPress={handleShare} 
                style={[modalStyles.button, modalStyles.addButton]}>
                  <Text style={[modalStyles.buttonText, modalStyles.addButtonText]}>Share</Text>
                </Pressable>
              </View>
            </>
          }
        </View>
      </View>
    </Modal>
  )
}