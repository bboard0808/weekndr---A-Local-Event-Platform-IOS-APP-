import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <Image source={require('../assets/images/weekndr.png')} style={styles.logo} />

            
            <Text style={styles.text}>don't miss out</Text>

            
            <Button title="Replay" onPress={() => navigation.replace('Splash')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        justifyContent: 'flex-start',  
        alignItems: 'center',  
        backgroundColor: '#A459D1',
        paddingTop: 10,  
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,  
    },
    logo: {
        width: 150,  
        height: 150,  
        resizeMode: 'contain',
    }
});

export default LoginScreen;
