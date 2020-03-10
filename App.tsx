import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from './Views/BottomTabNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <BottomTabNavigation />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
