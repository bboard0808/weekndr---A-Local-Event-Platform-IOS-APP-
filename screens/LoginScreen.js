import React from 'react';
import { View, Text, TextStyles, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/weekndr.png')} style={styles.logo} />
            <Text style={styles.header}>
                don't {' '}
                <Text style={styles.italic}>miss out</Text>
            </Text>

            <Text style={styles.tos}>
                By tapping 'Create Account' or 'Sign in' you agree to our{' '}
                <Text style={[styles.underline, styles.tosLink]}>Terms</Text>
                . Learn how we process your data in our{' '}
                <Text style={[styles.underline, styles.tosLink]}>Privacy Policy </Text>
                and{ ' ' }
                <Text style={[styles.underline, styles.tosLink]}>Cookies Policy</Text>.
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('InputPhoneNumber')}
            >
                <Text style={styles.buttonText}>Sign in with Phone Number</Text> 
            </TouchableOpacity>
        
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
    header: {
        fontSize: 28,
        color: 'white',
        marginTop: -20,  
    },
    logo: {
        width: 150,  
        height: 150,
        marginTop: -10,
        resizeMode: 'contain',
    },
    tos: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
        lineHeight: 16,
        marginTop: 100,
        paddingHorizontal: 20,
        textAlign: 'center',       
    },
    tosLink: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'white',
    },
    underline: {
        textDecorationLine: 'underline',
    },
    italic: {
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '14',
        padding: 12,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'white',
        marginTop: 30,
        borderRadius: 50,
        width: 330,
    }
});

export default LoginScreen;
