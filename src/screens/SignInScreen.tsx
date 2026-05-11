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
import { loginUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';

const SignInScreen = ({ navigation }: any) => {
   const dispatch = useAppDispatch();
   const users = useSelector((state: any) => state.auth.users);

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

    const handleEmailChange = (text: string) => {
        setEmail(text);
    };
    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const handleSubmit = () => {
       if (!isValidEmail(email)) {
          console.log('Invalid Email');
          return;
       }

       if (!isValidPassword(password)) {
          console.log('Invalid Password');
          return;
       }
       console.log('All validations passed');

       const user = users.find((item: any) => item.email === email && item.password === password);
       if (user) {
         dispatch(loginUser({ email, password }));
         navigation.navigate('Gallery');
       } else {
         Alert.alert('Invalid credentials');
       }
};

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>
        Sign In
      </Text>


      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        placeholderTextColor={"#999"}
        style={commonStyles.input}
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
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
