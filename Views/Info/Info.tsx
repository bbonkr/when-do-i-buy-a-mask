import React, { useState, useEffect, useMemo } from 'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { styles } from './styles';
import { DateUtility } from '../../lib/DateUtility';
import { TableItem } from '../../containers/Table/TableItem';

export const Info = () => {
    const dateUtility = new DateUtility();

    const handlePressGoToSite = () => {
        Linking.openURL('https://www.mfds.go.kr/brd/m_659/list.do');
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                bounces={false}
            >
                <View style={styles.contentContainer}>
                    <Text style={[styles.text, styles.titleText]}>
                        출생연도별 마스크 구입 요일
                    </Text>
                    <View style={styles.tableContainer}>
                        <TableItem title="요일" description="출생연도 끝자리" />
                        {[1, 2, 3, 4, 5, 6, 0].map(item => (
                            <TableItem
                                title={dateUtility.getDayName(item)}
                                description={dateUtility.getTarget(item)}
                            />
                        ))}
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handlePressGoToSite}
                        >
                            <Text style={styles.buttonText}>
                                공적 마스크 구매절차 질문&답변
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
