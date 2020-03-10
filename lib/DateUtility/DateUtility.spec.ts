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

    test('출생연도로 요일 찾기 1', () => {
        const year = '1971';
        const value = dateUtility.getDayByYear(year);
        expect(value).toBe(1);
    });

    test('출생연도로 요일 찾기 2', () => {
        const year = '1972';
        const value = dateUtility.getDayByYear(year);
        expect(value).toBe(2);
    });

    test('출생연도로 요일 찾기 3', () => {
        const year = '1973';
        const value = dateUtility.getDayByYear(year);
        expect(value).toBe(3);
    });

    test('출생연도로 요일 찾기 4', () => {
        const year = '1974';
        const value = dateUtility.getDayByYear(year);
        expect(value).toBe(4);
    });

    test('출생연도로 요일 찾기 5', () => {
        const year = '1975';
        const value = dateUtility.getDayByYear(year);
        expect(value).toBe(5);
    });

    test('출생연도로 요일 찾기 6', () => {
        const year = '1976';
        const value = dateUtility.getDayByYear(year);
        expect(value).toBe(1);
    });

    test('출생연도로 요일 찾기 7', () => {
        const year = '1977';
        const value = dateUtility.getDayByYear(year);
        expect(value).toBe(2);
    });

    test('출생연도로 요일 찾기 8', () => {
        const year = '1978';
        const value = dateUtility.getDayByYear(year);
        expect(value).toBe(3);
    });

    test('출생연도로 요일 찾기 9', () => {
        const year = '1979';
        const value = dateUtility.getDayByYear(year);
        expect(value).toBe(4);
    });

    test('출생연도로 요일 찾기 0', () => {
        const year = '1970';
        const value = dateUtility.getDayByYear(year);
        expect(value).toBe(5);
    });
});
