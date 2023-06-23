import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../styles/theme';

const PrimaryButton = ({title, onPress, error}) => {
  const [disableClick, setDisableClick] = useState(false);
  return (
    <TouchableOpacity
      disabled={disableClick}
      style={[styles.btnStyle, disableClick && styles.disableBtnStyle]}
      onPress={onPress}>
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
