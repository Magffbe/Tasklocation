import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

const firebaseConfig = {
    apiKey: "AIzaSyACrRhKjUcGc8hdCkX-TFqWD-btuoJuA6U",
    authDomain: "location-login-b740f.firebaseapp.com",
    projectId: "location-login-b740f",
    storageBucket: "location-login-b740f.appspot.com",
    messagingSenderId: "428508737855",
    appId: "1:428508737855:web:faa1e0cc9c02a86e27638a"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  

  const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
          // Inicia sesión con Firebase
          await firebase.auth().signInWithEmailAndPassword(email, password);
          console.log('Inicio de sesión exitoso');
          // Puedes navegar a la siguiente pantalla después del inicio de sesión exitoso
          // navigation.navigate('NombreDeTuSiguientePantalla');
        } catch (error) {
          console.error('Error al iniciar sesión:', error.message);
        }
      };
        
      const handleGoogleLogin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log('Iniciar sesión con Google:', userInfo);
        } catch (error) {
          console.error('Error al iniciar sesión con Google:', error);
        }
    }

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a TaskLocation</Text>

          <Input
        placeholder="Correo Electrónico"
        leftIcon={{ type: 'material', name: 'email' }}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

        <Input
        placeholder="Contraseña"
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
    
<Button title="Iniciar sesión" onPress={handleLogin} />
      <GoogleSigninButton
        style={{ width: '100%', height: 48, marginTop: 10 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleLogin}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Map')}>
        <Text style={styles.link}>Ir a la pantalla del Mapa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    link: {
      marginTop: 20,
      color: 'blue',
    },
  });
  
  export default LoginScreen;