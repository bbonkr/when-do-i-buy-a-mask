import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { styles } from './styles';
import { DateUtility } from '../../lib/DateUtility';

export const Today = () => {
    const dateUtility = new DateUtility();
    const [loading, setLoading] = useState(false);
    const [today, setToday] = useState<Date>(new Date());

    const day = useMemo(() => {
        return today.getDay();
    }, [today]);

    const getToday = () => {
        setLoading(true);
        setToday(new Date());
        setLoading(false);
    };

    useEffect(() => {
        getToday();
    }, []);

    const handleRefresh = () => {
        getToday();
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={handleRefresh}
                    />
                }
                bounces={false}
            >
                <View style={styles.contentContainer}>
                    <Text style={[styles.text, styles.dateText]}>
                        {`${today.getFullYear()}년 ${today.getMonth() +
                            1} 월 ${today.getDate()}일`}
                    </Text>

                    <Text style={[styles.text, styles.dayNameText]}>
                        {dateUtility.getDayName(day)}요일
                    </Text>

                    {dateUtility.isWeekend(day) ? (
                        undefined
                    ) : (
                        <Text style={[styles.text, styles.helpText]}>
                            주민등록상 출생연도 끝자리
                        </Text>
                    )}

                    <Text
                        style={[
                            styles.text,
                            styles.targetText,
                            dateUtility.isWeekend(day)
                                ? styles.weekendText
                                : {},
                        ]}
                    >
                        {dateUtility.getTarget(day)}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};
