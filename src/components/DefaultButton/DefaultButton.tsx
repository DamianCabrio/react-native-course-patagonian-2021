import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';

import styles, { buttonTextColors } from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  onPress: () => void;
  text: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({ additionalStyle, onPress, text, textSize, variant }: Props) => {
  console.log('/// variant ///', variant);
  return (
    <TouchableOpacity
      style={[styles.mainContainer, additionalStyle, styles[variant]]}
      onPress={onPress}
    >
      <Text style={{ fontSize: textSize, color: buttonTextColors[variant] || colors.white }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  textSize: 18,
  variant: 'primary',
};

export default DefaultButton;
