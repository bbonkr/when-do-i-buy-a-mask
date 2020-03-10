import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomColor: colors.light,
        borderBottomWidth: 2,
    },
    text: {
        fontSize: 18,
        color: colors.light,
    },
    titleText: {
        flex: 1,
    },
    descriptionText: { flex: 4 },
});
