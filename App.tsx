/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';

import { DefaultButton } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/utils/dimensions';

const showAlert = () => {
  Alert.alert('Hola!');
  console.log('Device height -> ', DEVICE_HEIGHT);
  console.log('Device width -> ', DEVICE_WIDTH);
};

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Hola</Text>
      <Text>Subtitulo</Text>
      <Image
        resizeMode="contain"
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      {/** This is a comment */}
      {/**<Button title="Hola" onPress={showAlert} />**/}
      <DefaultButton
        //additionalStyle={styles.button}
        color={colors.mainOrange}
        onPress={showAlert}
        text="Boton"
        textSize={24}
      />
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
    minHeight: 'auto',
    width: DEVICE_WIDTH * 0.5,
    aspectRatio: 16 / 9,
  },
  button: {
    backgroundColor: 'green',
    width: 50,
  },
});

export default App;
