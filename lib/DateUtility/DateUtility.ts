export class DateUtility {
    /**
     * 요일이름을 가져옵니다.
     *
     * @param {number} day
     * @returns {string}
     * @memberof DateUtility
     */
    public getDayName(day: number): string {
        switch (day) {
            case 0:
                return '일';
            case 1:
                return '월';
            case 2:
                return '화';
            case 3:
                return '수';
            case 4:
                return '목';
            case 5:
                return '금';
            case 6:
                return '토';
            default:
                throw new Error('알수없는 요일입니다.');
        }
    }
}
