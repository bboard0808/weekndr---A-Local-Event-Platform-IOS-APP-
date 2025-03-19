import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const CreateAccountScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.returnButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.returnButtonText}>Return to Login Screen</Text> 
            </TouchableOpacity>

            <Text style={styles.header}>Let's get started!</Text>

            <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#aaa"
                keyboardType="default"
                value={fullName}
                onChangeText={setFullName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
        <View style={styles.passwordContainer}>           
            <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#aaa"
                keyboardType="default"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
            />
            
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.showpasswordButton}>
                <Text style={styles.showpasswordText}>{passwordVisible ? "hide" : "show"}</Text>
            </TouchableOpacity>        
        </View>
            <Text style={styles.signupButton}>Sign Up</Text>
            
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
        fontWeight: 'bold',
        color: 'gold',
        marginTop: 30,  
        marginBottom: 20,
    },
    input: {
        width: 330,
        height: 50,
        padding: 14,
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 15,
        fontSize: 16,
        marginTop: 8,
        color: 'black',
        textAlign: 'left',
    },
    signupButton: {
        width: '80%',
        height: 50,
        padding: 14,
        backgroundColor: '#63396e',
        borderColor: '#121212',
        borderRadius: 3,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        marginTop: 16,
        color: 'gold',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonText: {
        width: '80%',
        height: 50,
        color: 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: 20,
        padding: 30,
        paddingHorizontal: 15,
    },
    returnButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: 20,
    },
    passwordContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: 330,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 14,
        marginTop: 8,
        
    },
    passwordInput: {
        flex: 1,  
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        paddingVertical: 0,
        paddingHorizontal: 15,
    },
    showpasswordButton: {
        position: 'absolute', 
        right: 15,  
    },
    showpasswordText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#A459D1',
    }

});

export default CreateAccountScreen;