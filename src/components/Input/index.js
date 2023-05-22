import * as React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { useTheme } from '@react-navigation/native';

const Input = ({
  style = {},
  value,
  onChangeText = () => { },
  keyboardType = 'default',
  placeholder = '',
  disabled = false,
  maxLength = null,
  secureTextEntry = false,
}) => {
  const { colors } = useTheme();
  return (
    <TextInput
      style={{
        ...styles.input,
        backgroundColor: colors.gray,
        ...style,
      }}
      value={value}
      onChangeText={text => onChangeText(text)}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={colors.darkGray}
      disabled={disabled}
      maxLength={maxLength}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
