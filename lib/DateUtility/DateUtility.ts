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

    /**
     * 주말 여부
     *
     * @param {number} day
     * @returns {boolean}
     * @memberof DateUtility
     */
    public isWeekend(day: number): boolean {
        return day < 1 || day > 5;
    }

    public getTarget(day: number): string {
        const targets = this.getTargets(day);

        return targets.length > 0
            ? targets.join(', ')
            : this.getDescriptionWeekend();
    }

    /**
     * 요일별 출생연도 끝자리를 가져옵니다.
     *
     * @param {number} day
     * @returns {string[]}
     * @memberof DateUtility
     */
    public getTargets(day: number): string[] {
        const table = this.getTable();

        if (day > 0 && day < 6) {
            return table[day];
        } else {
            return [];
        }
    }

    public getDayByYear(year: string): number {
        const last = year.substr(3, 1);
        const day = this.getTable().findIndex(
            x => x.findIndex(y => y === last) >= 0,
        );

        return day;
    }

    public getTable() {
        return [
            [], // 일
            ['1', '6'], // 월
            ['2', '7'], // 화
            ['3', '8'], // 수
            ['4', '9'], // 목
            ['5', '0'], // 금
            [], // 토
        ];
    }

    /**
     * 주중 구입하지 않은 모든 출생연도 끝자리 설명
     *
     * @returns {string}
     * @memberof DateUtility
     */
    public getDescriptionWeekend(): string {
        return '주중 구입하지 않은 모든 사람';
    }

    public getYears(): string[] {
        const today = new Date();
        const yearsValue: string[] = [];
        for (let i = today.getFullYear(), min = 1900; i >= min; i--) {
            yearsValue.push(i.toString());
        }

        return yearsValue;
    }
}
