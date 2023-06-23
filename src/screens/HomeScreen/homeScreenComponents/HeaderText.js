import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../../../styles/theme';

const HeaderText = React.memo(({text}) => {
  return <Text style={styles.textStyle}>{text}</Text>;
});

export default HeaderText;

const styles = StyleSheet.create({
  textStyle: {
    color: theme.colors.black,
    fontSize: theme.fontSizes.large,
    fontWeight: '700',
    paddingVertical: 10,
  },
});
