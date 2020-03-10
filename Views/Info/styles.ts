import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green,
    },
    scroll: {
        paddingVertical: Constants.statusBarHeight,
    },
    contentContainer: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingVertical: 20,
    },
    tableContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
    },
    text: {
        color: colors.light,
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
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
