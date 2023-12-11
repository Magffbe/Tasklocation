import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import firebase from '@react-native-firebase/app'
//import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyACrRhKjUcGc8hdCkX-TFqWD-btuoJuA6U",
    authDomain: "location-login-b740f.firebaseapp.com",
    projectId: "location-login-b740f",
    storageBucket: "location-login-b740f.appspot.com",
    messagingSenderId: "428508737855",
    appId: "1:428508737855:web:faa1e0cc9c02a86e27638a"
};

const app = initializeApp(firebaseConfig);

const saveReminderToFirebase = (reminder) => {
    firebase.database().ref('reminders').push(reminder);
};

const MapScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [reminderLocation, setReminderLocation] = useState(null);

    useEffect(() => {
        getLocationAsync();
    }, []);

    const getLocationAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status === 'granted') {
            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);
        } else {
            console.log('Permiso de ubicación denegado');
        }
    };

    const handleMapPress = (e) => {
        setReminderLocation(e.nativeEvent.coordinate);
    };
}


    const handleCreateReminder = () => {
        const reminder = {
            latitude: reminderLocation.latitude,
            longitude: reminderLocation.longitude,
            title: 'Recordatorio',
            description: 'Descripción del recordatorio',
        }

        saveReminderToFirebase(reminder);
        console.log('Recordatorio creado en:', reminderLocation);
        return (
        <View style={styles.container}>
            {location && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onPress={handleMapPress}
                >
                    {reminderLocation && <Marker coordinate={reminderLocation} title="Ubicación del Recordatorio" />}
                </MapView>
            )}
        

            <TouchableOpacity style={styles.createButton} onPress={handleCreateReminder}>
                <Text style={styles.createButtonText}>Crear Recordatorio</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TaskList')}>
                <Text style={styles.link}>Ir a la Lista de Tareas</Text>
            </TouchableOpacity>
        </View>
    );
                };



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    createButton: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 8,
        alignItem
    }
});
    


