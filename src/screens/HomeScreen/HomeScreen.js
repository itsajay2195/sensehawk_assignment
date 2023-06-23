import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useMemo} from 'react';
import CustomTextInput from '../../components/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import theme from '../../styles/theme';
import SocialLoginComponent from '../../components/SocialLoginComponent';
import Separator from './homeScreenComponents/Separator';
import HeaderText from './homeScreenComponents/HeaderText';

const HomeScreen = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signupSuccess, setSuccess] = useState(false);
  const handlePasswordChange = useCallback(text => {
    setPassword(text);
    setError('');
  }, []);

  const handleUsernameChange = useCallback(text => {
    setUsernameOrEmail(text);
    setError('');
  }, []);

  const handleLogin = useCallback(() => {
    setError('');

    if (!usernameOrEmail) {
      setError('Please enter a username or email address');
      return;
    }

    if (!password) {
      setError('Please enter a password');
      return;
    }

    const isEmail = validateEmail(usernameOrEmail);
    const isUsername = validateUsername(usernameOrEmail);

    if (!isEmail && !isUsername) {
      setError('Invalid username or email address');
      return;
    }

    // Perform login or further actions
    // Reset form state
    setUsernameOrEmail('');
    setPassword('');
    setError('');
    setSuccess(prev => !prev);
  }, [password, usernameOrEmail, validateEmail, validateUsername]);

  const validateEmail = useCallback(input => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }, []);

  const validateUsername = useCallback(input => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    return usernameRegex.test(input);
  }, []);

  const errorMessage = useMemo(() => {
    return error ? <Text style={styles.errorTextstyle}>{error}</Text> : null;
  }, [error]);

  const successMessage = useMemo(() => {
    return signupSuccess ? (
      <Text style={styles.successTextStyle}>Sign up successfull</Text>
    ) : null;
  }, [signupSuccess]);

  return (
    <View style={styles.container}>
      <HeaderText text={'Sign in to Dribble'} />
      <SocialLoginComponent />
      <Separator />
      <CustomTextInput
        placeholder="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        value={usernameOrEmail}
        onChangeText={handleUsernameChange}
        label={'Username or email address'}
      />

      <CustomTextInput
        placeholder="password"
        textContentType="password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
        label={'Password'}
      />
      {errorMessage}
      <View style={styles.buttonWrapper}>
        <PrimaryButton title={'Sign In'} onPress={handleLogin} error={error} />
      </View>
      {successMessage}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: theme.colors.white,
  },
  errorTextstyle: {
    padding: 5,
    color: theme.colors.red,
  },
  successTextStyle: {
    padding: 5,
    color: theme.colors.blue,
  },
  buttonWrapper: {
    display: 'flex',
    width: '50%',
    marginVertical: 10,
  },
});
