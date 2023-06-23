import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useMemo} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../styles/theme';

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const HomeScreen = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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

    if (!password) {
      setError('Please enter a password');
      return;
    }
    if (!usernameOrEmail) {
      setError('Please enter a username or email address');
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

  return (
    <View style={styles.container}>
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
      <PrimaryButton title={'Sign Up'} onPress={handleLogin} />
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
});
