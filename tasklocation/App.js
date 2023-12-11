import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import LoginScreen from './Components/LoginScreen';
import MapScreen from './Components/MapScreen';

GoogleSignin.configure({
  webClientId: '428508737855-ff3g355n0f4ecrip31hjr15f7ibnv56e.apps.googleusercontent.com',
});



const firebaseConfig = {
  apiKey: "AIzaSyACrRhKjUcGc8hdCkX-TFqWD-btuoJuA6U",
  authDomain: "location-login-b740f.firebaseapp.com",
  projectId: "location-login-b740f",
  storageBucket: "location-login-b740f.appspot.com",
  messagingSenderId: "428508737855",
  appId: "1:428508737855:web:faa1e0cc9c02a86e27638a"
};

const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
