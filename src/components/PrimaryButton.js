import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import theme from '../styles/theme';

const PrimaryButton = ({title, onPress}) => {
  const [disableClick, setDisableClick] = useState(false);

  const handlePress = () => {
    if (!disableClick) {
      setDisableClick(true);
      onPress();
    }
  };

  return (
    <TouchableOpacity
      disabled={disableClick}
      style={[styles.btnStyle, disableClick && styles.disableBtnStyle]}
      onPress={handlePress}>
      <Text style={styles.btnTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 10,
    backgroundColor: theme.colors.primaryPink,
    alignItems: 'center',
    padding: 10,
  },
  disableBtnStyle: {
    backgroundColor: 'blue',
    opacity: 0.5,
  },
  btnTextStyle: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.large,
    fontWeight: '700',
  },
});
