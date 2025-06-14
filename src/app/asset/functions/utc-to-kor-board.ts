export const boardUtcToKorTime = (date: Date): string => {
    const utc: number = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const KR_TIME = new Date(utc + (KR_TIME_DIFF));

    const year = KR_TIME.getFullYear().toString();
    const month = KR_TIME.getMonth() + 1 <10 ? "0" + (KR_TIME.getMonth() + 1).toString() : (KR_TIME.getMonth() + 1).toString();
    const dates = KR_TIME.getDate() < 10 ? "0" + KR_TIME.getDate().toString() : KR_TIME.getDate().toString();
    const hours = KR_TIME.getHours() < 10 ? "0" + KR_TIME.getHours().toString() : KR_TIME.getHours().toString();
    const minutes = KR_TIME.getMinutes() < 10 ? "0" + KR_TIME.getMinutes().toString() : KR_TIME.getMinutes().toString();
    const seconds = KR_TIME.getSeconds() < 10 ? "0" + KR_TIME.getSeconds().toString() : KR_TIME.getSeconds().toString();
 
    const myDay =  year + "." + month + "." + dates + " " + hours + ":" + minutes + ":" + seconds; 

    return myDay
}