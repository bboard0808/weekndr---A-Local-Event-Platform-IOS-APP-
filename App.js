import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen'; 
import LoginScreen from './screens/LoginScreen';  
import InputPhoneNumberScreen from './screens/InputPhoneNumberScreen'; 
import CreateAccountScreen from './screens/CreateAccountScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="InputPhoneNumber" component={InputPhoneNumberScreen} />
                <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
