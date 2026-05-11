import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { commonStyles } from '../styles/theme';
import { isValidName, isValidEmail, isValidPassword, isValidMobile } from '../utils/Validation';
import { useAppDispatch } from '../app/hooks';
import { loginUser, registerUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';

const RegisterScreen = ({ navigation }: any) => {
   const dispatch = useAppDispatch();
   const users = useSelector((state: any) => state.auth.users);

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const [password, setPassword] = useState('');

    const handleNameChange = (text: string) => {
        setName(text);
          handleSubmit();
    };
    const handleEmailChange = (text: string) => {
        setEmail(text);
          handleSubmit();
    };
    const handlePhoneNumberChange = (text: string) => {
        setPhoneNumber(text);
          handleSubmit();
    };
    const handlePasswordChange = (text: string) => {
        setPassword(text);
        handleSubmit();
    };

    const handleSubmit = () => {
        if (!isValidName(name)) {
          console.log('Invalid Name');
          return;
        }

       if (!isValidEmail(email)) {
          console.log('Invalid Email');
          return;
       }

       if (!isValidPassword(password)) {
          console.log('Invalid Password');
          return;
       }

       if (!isValidMobile(phoneNumber)) {
          console.log('Invalid Phone Number');
          return;
       }
       console.log('All validations passed');
    
      
       const isUserExists = users.some((item: any) => item.email === email);
       if (isUserExists) {
        Alert.alert('User already exists');
        return;
       } else {
        dispatch(registerUser({ name, email, phoneNumber, password }));
        Alert.alert('Registration successful');
       }
   
        

    };

    const handleSignin = () => {
      navigation.navigate('SignIn');
    };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>
        Register
      </Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={handleNameChange}
        placeholderTextColor={"#999"}
        style={commonStyles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        placeholderTextColor={"#999"}
        style={commonStyles.input}
      />

      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        placeholderTextColor={"#999"}
        style={commonStyles.input}
        keyboardType="number-pad"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        placeholderTextColor={"#999"}
        style={commonStyles.input}
        secureTextEntry
      />

      <TouchableOpacity style={commonStyles.button} onPress={handleSubmit}>
        <Text style={commonStyles.buttonText}>
          Register
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={commonStyles.button} onPress={handleSignin}>
        <Text style={commonStyles.buttonText}>
          SignIn
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
