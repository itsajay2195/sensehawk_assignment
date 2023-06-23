import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../styles/theme';

const PrimaryButton = ({title, onPress}) => {
  const [disableClick, setDisableClick] = React.useState(false);
  return (
    <TouchableOpacity
      disabled={disableClick}
      style={disableClick ? styles.disableBtnstyle : styles.btnStyle}
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
  disableBtnstyle: {
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    opacity: 0.5,
  },
  btnTextStyle: {
    color: theme.colors.black,
    fontSize: theme.fontSizes.large,
    fontWeight: '700',
  },
});
