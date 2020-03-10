import { DateUtility } from './DateUtility';

describe('DateUtility 테스트', () => {
    let dateUtility: DateUtility;
    beforeAll(() => {
        dateUtility = new DateUtility();
    });

    test('월요일', () => {
        const day = 1;

        const dayName = dateUtility.getDayName(day);

        expect(dayName).toBe('월');
    });

    test('화요일', () => {
        const day = 2;

        const dayName = dateUtility.getDayName(day);

        expect(dayName).toBe('화');
    });

    test('수요일', () => {
        const day = 3;

        const dayName = dateUtility.getDayName(day);

        expect(dayName).toBe('수');
    });

    test('목요일', () => {
        const day = 4;

        const dayName = dateUtility.getDayName(day);

        expect(dayName).toBe('목');
    });

    test('금요일', () => {
        const day = 5;

        const dayName = dateUtility.getDayName(day);

        expect(dayName).toBe('금');
    });

    test('토요일', () => {
        const day = 6;

        const dayName = dateUtility.getDayName(day);

        expect(dayName).toBe('토');
    });

    test('일요일', () => {
        const day = 0;

        const dayName = dateUtility.getDayName(day);

        expect(dayName).toBe('일');
    });

    test('주말여부', () => {
        expect(dateUtility.isWeekend(0)).toBe(true);
        expect(dateUtility.isWeekend(6)).toBe(true);
    });

    test('주중여부', () => {
        expect(dateUtility.isWeekend(1)).toBe(false);
        expect(dateUtility.isWeekend(5)).toBe(false);
    });
});
