import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { DefaultButton, DefaultModal } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

// const showAlert = () => {
//   Alert.alert('Hola!');
// };

//TODO: Crear un componente custom con el modal

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Título</Text>
      <Text>Subtitulo</Text>
      <Image
        resizeMode="contain"
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <DefaultButton onPress={showModal} text="Mostrar Modal" variant="primary" />
      <DefaultModal isModalVisible={isModalVisible} hideModal={hideModal} text="Texto"></DefaultModal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.verylightBlue,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colors.mainOrange,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  image: {
    aspectRatio: 1,
    minHeight: 100,
    width: DEVICE_WIDTH * 0.5,
  },
  button: {
    backgroundColor: 'green',
    width: 50,
  },
});

export default App;
