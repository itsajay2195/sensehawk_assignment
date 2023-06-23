import React, {useMemo} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import theme from '../styles/theme';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  textContentType,
  keyboardType,
  textInputStyle,
  containerStyle,
  isError,
  label,
  titleRef,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleInputFocus = React.useCallback(() => {
    setIsFocused(prev => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={titleRef}
        autoCapitalize="none"
        // placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        textContentType={textContentType}
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
        style={[
          styles.textInput,
          {
            borderWidth: isError ? 1 : null,
            borderColor: isError ? 'red' : null,
            backgroundColor: isFocused ? 'white' : '#F3F3F4',
          },
          textInputStyle,
        ]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
    borderColor: '#F3F3F4',
  },
  textInput: {
    padding: 15,
    width: '100%',
    borderRadius: 10,
    color: theme.colors.black,
    backgroundColor: '#F3F3F4',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CustomTextInput;
