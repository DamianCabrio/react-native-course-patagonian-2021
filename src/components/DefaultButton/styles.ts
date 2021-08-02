import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainOrange,
    borderRadius: 10,
    height: 50,
    marginTop: 10,
    width: '80%',
  },
  primary: {
    backgroundColor: colors.mainOrange,
  },
  secondary: {
    backgroundColor: '#dddd',
  },
});

export const buttonTextColors = {
  primary: colors.white,
  secondary: colors.mainOrange,
};

export default styles;
