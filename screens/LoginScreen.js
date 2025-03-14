import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Logo Positioned at the Top */}
            <Image source={require('../assets/images/weekndr.png')} style={styles.logo} />

            {/* Centered Text Below Logo */}
            <Text style={styles.text}>don't miss out</Text>

            {/* Replay Button */}
            <Button title="Replay" onPress={() => navigation.replace('Splash')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        justifyContent: 'flex-start',  // Aligns content from the top
        alignItems: 'center',  // Centers horizontally
        backgroundColor: '#A459D1',
        paddingTop: 10,  // Moves everything down a bit
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,  // Adds space between logo & text
    },
    logo: {
        width: 150,  
        height: 150,  
        resizeMode: 'contain',
    }
});

export default LoginScreen;
