import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from './Views/BottomTabNavigation';

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigation />
        </NavigationContainer>
    );
}
