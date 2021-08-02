import React from 'react';
import { Modal, Text, View } from 'react-native';
import { DefaultButton } from '../../components';

import styles from './styles';

interface Props {
  isModalVisible: boolean;
  hideModal: () => void;
  text: string;
}

const DefaultModal = ({ isModalVisible, hideModal, text }: Props) => {
  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
      <View style={[styles.mainContainer]}>
        <View style={[styles.modalContainer]}>
          <Text style={[styles.modalText]}>{text}</Text>
          <DefaultButton onPress={hideModal} text="Ok" additionalStyle={{ height: 40 }} />
        </View>
      </View>
    </Modal>
  );
};

export default DefaultModal;
