import React, { useState, useEffect, useMemo } from 'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    StatusBar,
} from 'react-native';
import { styles } from './styles';
import { DateUtility } from '../../lib/DateUtility';
import { colors } from '../../values/colors';
import { CardView } from '../../components/CardView/CardView';

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

    const targets = dateUtility.getTargets(day);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={handleRefresh}
                        title="새로고침"
                        titleColor={colors.light}
                        tintColor={colors.light}
                    />
                }
                bounces={true}
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

                    <View style={styles.daysContainer}>
                        {targets.length > 0 ? (
                            targets.map(t => (
                                <CardView
                                    key={`day-${t}`}
                                    backgroundColor={styles.text.color}
                                    textColor={styles.container.backgroundColor}
                                    text={t}
                                />
                            ))
                        ) : (
                            <Text
                                style={[
                                    styles.text,
                                    styles.targetText,
                                    styles.weekendText,
                                ]}
                            >
                                {dateUtility.getDescriptionWeekend()}
                            </Text>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
