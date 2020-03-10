import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.blue,
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.light,
    },
    dateText: {
        fontSize: 28,
        fontWeight: '600',
        marginVertical: 3,
    },
    dayNameText: {
        fontSize: 40,
        fontWeight: '600',

        marginVertical: 12,
    },
    targetText: {
        fontSize: 40,
        fontWeight: '600',
    },
    weekendText: {
        fontSize: 28,
        fontWeight: '600',
    },
    helpText: {
        fontSize: 18,
        marginVertical: 12,
    },
});
