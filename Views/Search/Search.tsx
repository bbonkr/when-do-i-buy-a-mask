import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, AsyncStorage, StatusBar } from 'react-native';
import Select from 'react-native-picker-select';
import { useStyles } from './styles';
import { useSafeArea } from 'react-native-safe-area-context';
import { asyncStorageKeys } from '../../values/asyncStorageKeys';
import { DateUtility } from '../../lib/DateUtility';

export const Search = () => {
    const safeArea = useSafeArea();
    const styles = useStyles(safeArea);

    const dateUtility = new DateUtility();

    const [records, setRecords] = useState<string[]>(() =>
        dateUtility.getYears(),
    );

    const [selectedYear, setSelectedYear] = useState<string>('');
    const [dayName, setDayName] = useState<string>('');

    useEffect(() => {
        AsyncStorage.getItem(asyncStorageKeys.selectedYear)
            .then(result => {
                setSelectedYear(result || '');
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {});
    }, []);

    useEffect(() => {
        if (selectedYear) {
            setDayName(
                `${dateUtility.getDayName(
                    dateUtility.getDayByYear(selectedYear),
                )}요일`,
            );
        }
    }, [selectedYear]);

    const handleChangeSelect = (value: string) => {
        setSelectedYear(value);
        AsyncStorage.setItem(asyncStorageKeys.selectedYear, value)
            .then(() => {})
            .catch(error => {
                console.error(error);
            })
            .finally(() => {});
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                bounces={false}
            >
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.labelText}>출생연도</Text>
                        <Select
                            value={selectedYear}
                            onValueChange={handleChangeSelect}
                            items={records.map(year => ({
                                key: year,
                                label: year,
                                value: year,
                            }))}
                            textInputProps={{
                                style: styles.selectText,
                            }}
                            placeholder={{
                                // key: '0000',
                                label: '출생연도를 선택하세요',
                                value: '',
                            }}
                            doneText="선택"
                            style={{
                                inputAndroid: styles.selectText,
                            }}
                        />

                        {selectedYear ? (
                            <View style={styles.dayNameContainer}>
                                <Text style={styles.dayNameText}>
                                    {dayName}
                                </Text>
                            </View>
                        ) : (
                            undefined
                        )}
                    </View>

                    <View style={styles.helpContainer}>
                        <Text style={styles.helpText}>
                            출생연도를 선택하면 공적 마스크 구입 요일을
                            알려드려요.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
