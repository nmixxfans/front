// 비속어 필터링용 배열
const slang = ["망믹스", "씨발", "병신", "븅", "븅신", "fuck", "fxxk", "fuck you", "fucknmixx", "퍽유", "퍽믹스", "망왚", "sex", "mangnmixx", "mang", "뻑유", "sexy", "gay", "Lesbian", "les", "이재명", "재명", "윤석열", "석열", "김건희", "건희", "이낙연", "낙연", "페미", "홍준표", "준표", "재명", "노무현", "무현", "이명박", "명박", "박근혜", "근혜", "새끼", "씨발새끼", "병신새끼", "정신병", "정신병자", "시발새끼", "새꺄", "씨발새꺄", "븅신새끼", "좆믹스", "tlqkf", "Tlqkf", "섹스"]

export const slangCheck = (word: string) => {

  let result: boolean = true

  let reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  let regData = word.replace(reg, "");
  
  slang.map((v) => {
    if (regData.indexOf(v) > -1) {
      result = false;
    }
  })

  return result
};