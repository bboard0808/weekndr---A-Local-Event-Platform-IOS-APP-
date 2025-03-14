import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login'); 
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/weekndr.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A459D1',
    },
    logo: {
        width: 300,  
        height: 300,  
        resizeMode: 'contain', 
        marginBottom: 20, 
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    }
});

export default SplashScreen;
