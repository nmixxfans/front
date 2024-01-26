export const korTime = (date: Date): string => {
    const utc: number = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const KR_TIME = new Date(utc + (KR_TIME_DIFF));
    const currTime = new Date;

    const currFull:string = currTime.getFullYear().toString() + (currTime.getMonth() + 1).toString()  + currTime.getDate().toString();
    const KR_FULL:string = KR_TIME.getFullYear().toString() + (KR_TIME.getMonth() + 1).toString() + KR_TIME.getDate().toString();

    const notToday = KR_TIME.getFullYear().toString() + "." + (KR_TIME.getMonth() + 1).toString() + "." + KR_TIME.getDate().toString();
    const today = KR_TIME.getHours().toString() + ":" + KR_TIME.getMinutes().toString(); 

    // 저장된 날이 오늘과 같은지, 다른지 확인
    if(KR_FULL===currFull){
        return today;
    }else{
        return notToday;
    }
}