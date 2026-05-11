import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from '../screens/RegisterScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ImageDetailsScreen from '../screens/ImageDetailsScreen';
import SignInScreen from '../screens/SignInScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
        />

        <Stack.Screen
          name="ImageDetails"
          component={ImageDetailsScreen}
        />


        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
        />

        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;