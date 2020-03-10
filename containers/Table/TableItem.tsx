import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface TableItemProps {
    title: string;
    description: string;
}

export const TableItem = ({ title, description }: TableItemProps) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.titleText]}>{title}</Text>
            <Text style={[styles.text, styles.descriptionText]}>
                {description}
            </Text>
        </View>
    );
};
