import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  modalContainer: {
    backgroundColor: colors.white,
    width: '65%',
    borderRadius: 13,
    paddingBottom: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    marginVertical: 20,
  },
});

export default styles;
