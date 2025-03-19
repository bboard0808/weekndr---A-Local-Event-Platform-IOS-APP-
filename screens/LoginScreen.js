import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, Animated } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [showSignInOptions, setShowSignInOptions] = useState(false);
    const opacityAnim = useRef(new Animated.Value(1)).current;

    const handleSignInPress = () => {
        Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
        }).start(() => {
            setShowSignInOptions(true);
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }).start();
        });
    };

const handleReturnPress = () => {
    Animated.timing(opacityAnim, {
        toValue: 0, 
        duration: 150,
        useNativeDriver: true,
    }).start(() => {
        setShowSignInOptions(false); 
        Animated.timing(opacityAnim, {
            toValue: 1, 
            duration: 150,
            useNativeDriver: true,
        }).start();
    });
};
    return (
        //TERMS OF SERVICE
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

            {/* Initial Interactive Buttons */}
            {!showSignInOptions ? (
                <Animated.View style={{ opacity: opacityAnim }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('CreateAccount')}
                    >
                        <Text style={styles.buttonText}>Create account</Text>
                    </TouchableOpacity>    
                
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSignInPress}
                    >
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>    
                </Animated.View> 
            ) : (
                <Animated.View style={{ opacity: opacityAnim }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('InputPhoneNumber')}
                    >
                        <Text style={styles.buttonText}>Sign in with Phone Number</Text> 
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('InputPhoneNumber')}
                    >
                        <Text style={styles.buttonText}>Sign in with Apple</Text> 
                    </TouchableOpacity>
                        
                     <TouchableOpacity
                        style={styles.returnButton}
                        onPress={handleReturnPress}
                    >
                        <Text style={styles.returnButtonText}>Return to Create Account</Text> 
                    </TouchableOpacity>
                </Animated.View>
            )}
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
        fontWeight: 'bold',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 14,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 50,
        width: 330,
    },
    returnButton: {
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 50,
        width: 330,        
    },
    returnButtonText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 14,
        textAlign: 'center',        
    }
});

export default LoginScreen;
