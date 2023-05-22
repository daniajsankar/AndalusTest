import * as React from 'react';
import { TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import styles from './styles';
import { useTheme } from '@react-navigation/native';

const Button = ({
  style = {},
  isLoading = false,
  isDisabled = false,
  title,
  onPress,
}) => {
  const {
    colors: { primary },
  } = useTheme();
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: isDisabled ? "#E8E8E8" : primary,
        ...style,
      }}
      onPress={() => {
        if (!isLoading && !isDisabled) onPress();
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text
          style={{
            ...styles.btnTextBold,
            color: isDisabled ? "#C1C1C1" : "#434343",
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
