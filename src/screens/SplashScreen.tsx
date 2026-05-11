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
   const users = useSelector((state: any) => state.auth.isLoggedIn);
   if (users) {
      navigation.navigate('Gallery');
   } else {
    navigation.navigate('Register');
   }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>
        Loading Splash
      </Text>
      </View>
  );
};

export default RegisterScreen;
