import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../../styles/theme';

const Separator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lineStyle} />

      <View style={styles.labelContainer}>
        <View style={styles.orTextWrapper}>
          <Text style={styles.orTextStyle}>or</Text>
        </View>
      </View>
    </View>
  );
};

export default Separator;

const styles = StyleSheet.create({
  container: {flex: 0.1, justifyContent: 'center', margin: 10},
  lineStyle: {
    flexDirection: 'row',
    borderWidth: 0.25,
    borderColor: theme.colors.grey,
  },
  labelContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  orTextWrapper: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orTextStyle: {color: 'black'},
});
