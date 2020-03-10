import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';
import { EdgeInsets } from 'react-native-safe-area-context';
export const useStyles = (safeArea: EdgeInsets) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.light,
        },
        scrollContent: {
            flex: 1,
            paddingTop: (safeArea.top ? safeArea.top : 0) + 48,
        },
        contentContainer: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            // backgroundColor: '#bbb',
        },
        labelText: {
            fontSize: 22,
            color: colors.dark,
            marginBottom: 12,
        },
        selectText: {
            fontSize: 36,
            color: colors.dark,
            textAlign: 'center',
        },
        dayNameContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 48,
            backgroundColor: colors.red,
            paddingHorizontal: 48,
            paddingVertical: 24,
        },
        dayNameText: {
            color: colors.light,
            fontSize: 40,

            fontWeight: '600',

            marginVertical: 12,
        },
        helpContainer: {
            paddingHorizontal: 24,
            paddingVertical: 24,
            marginBottom: 24,
            marginHorizontal: 12,
            backgroundColor: colors.gray,
        },
        helpText: {
            fontSize: 20,
            color: colors.light,
        },
    });
