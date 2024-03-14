export const myUtcToKorTime = (date: Date): string => {
    const utc: number = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const KR_TIME = new Date(utc + (KR_TIME_DIFF));

    const year = KR_TIME.getFullYear().toString();
    const month = KR_TIME.getMonth() + 1 <10 ? "0" + (KR_TIME.getMonth() + 1).toString() : (KR_TIME.getMonth() + 1).toString()
    const dates = KR_TIME.getDate() < 10 ? "0" + KR_TIME.getDate().toString() : KR_TIME.getDate().toString()

    const myDay =  year + "-" + month + "-" + dates;

    return myDay
}