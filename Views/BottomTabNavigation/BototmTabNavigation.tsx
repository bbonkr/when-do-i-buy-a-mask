import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { screenNames } from '../../values/ScreenNames/ScreenNames';
import { Today } from '../Today';
import { Info } from '../Info';
import { Search } from '../Search';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={screenNames.today}
                component={Today}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="today" size={size} color={color} />
                    ),
                    title: '오늘',
                }}
            />
            <Tab.Screen
                name={screenNames.info}
                component={Info}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="info" size={size} color={color} />
                    ),
                    title: '정보',
                }}
            />
            <Tab.Screen
                name={screenNames.search}
                component={Search}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="search" size={size} color={color} />
                    ),
                    title: '찾기',
                }}
            />
        </Tab.Navigator>
    );
};
