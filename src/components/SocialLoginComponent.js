import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import theme from '../styles/theme';

const SocialLoginComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.googleBtnWraper}>
        <GoogleSigninButton
          style={{width: '100%'}}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          // onPress={this._signIn}
          // disabled={this.state.isSigninInProgress}
        />
      </View>
      <View style={styles.twitterIconWrapper}>
        <TouchableOpacity style={styles.twitterIconStyle}>
          <Icon name={'twitter'} size={24} color={theme.colors.grey} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialLoginComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  googleBtnWraper: {display: 'flex', flex: 1},
  twitterIconWrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  twitterIconStyle: {
    height: 40,
    width: 40,
    backgroundColor: theme.colors.greyScondray,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
