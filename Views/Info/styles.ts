import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green,
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    tableContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: colors.light,
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    buttonContainer: {
        justifyContent: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: colors.light,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingVertical: 9,
    },
    buttonText: {
        color: colors.green,
        fontSize: 18,
    },
});
