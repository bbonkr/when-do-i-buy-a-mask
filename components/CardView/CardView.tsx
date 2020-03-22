import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface CardViewProps {
    text: string;
    backgroundColor?: string;
    textColor?: string;
}

export const CardView = ({
    text,
    backgroundColor,
    textColor,
}: CardViewProps) => {
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: backgroundColor || '#fff' },
            ]}
        >
            <Text
                style={[
                    styles.text,
                    {
                        color: textColor || '#000',
                    },
                ]}
            >
                {text}
            </Text>
        </View>
    );
};
