import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const InputPhoneNumberScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Return to Login Screen</Text> 
            </TouchableOpacity>

            <Text style={styles.header}>Please enter your Phone Number.</Text>
        
            <TextInput
                style={styles.input}
                placeholder="Phone Number US +1"
                placeholderTextColor="#aaa"
                keyboardType="phone-pad"
            />
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
        fontSize: 16,
        color: 'white',
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    button: {
        marginTop: 50,
        marginBottom: 100,
        alignItems: 'top',
    }
});

export default InputPhoneNumberScreen;