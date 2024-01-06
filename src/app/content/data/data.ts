import mvList from "./information/mvList"
import liveList from "./information/liveList"

interface information {
    name:string,
    title:string,
    array:any[],
}

interface videoInformation {
    href:string,
    src:string,
    title:string,
}

// // MIXXTAPE
// const tapeList : videoInformation[] = ["fl1uyD6Zt08", "9L_2AIq9mXU", "vwQFA-m-UAo", "_0mpoJSncS8", "q5OL7freGz4"]

// // PICK NMIXX
// const pickList : videoInformation[] = ["-PzxEYYjwT8", "Ijscl7Fb_vQ", "hQ7JpXVVn_I", "fP7WX8gfBJo" ,"boYRBUyMoLY", "xHSrM6tDXnk", "5raLpQEw1lM", "Tvvi4OLZSUk", "Ep54VUSje8c", "QB0N_3IxxAo", ]

// // MIXXPLORE
// const mixxploreList : videoInformation[] = ["ju51oAPk9XM", "2lZqFVU-Qko", "WSrYSNpBQ0A", "p-bLq4cdNis", "30f2twUtvNE"]

// // 이상한 나라의 엔믹스
// const wonderlandList : videoInformation[] = ["pVAzjbBu4ek", "S0ukxsMPts0", "EyTfOQ859Kc", "vMmfDW3fTsM", "Fs65FzqUQLk", "CWSAiEaXa08", "EoG3nZFVdWM", "HS68y_WEFr0", "Vb5NLEizfFw"];

// // 픽엔믹스 방학시즌
// const vacationList : any[] = ["1_htJk-pyIc", "YuztLfRnLsU", "Ud2z7GTQPcM", "4aC4kXpNNpg", "EBufRNbl62Q"]

// // showcase
// const showList : any[] = ["2Iu6W6r2OC0", "zEHwlz8YYY8", {href:"29309193", src:"https://phinf.pstatic.net/tvcast/20220920_273/TgX7X_1663613148187zDp1Y_PNG/entwurf.png?type=now720"} ,"S0QiN6cX3zg"]

// Controll
const controll : information[] = [
    {
        name:"M/V",
        title:"뮤직비디오",
        array: mvList,
    },
    {
        name:"NMIXX ON AIR",
        title:"엔믹스 라이브",
        array: liveList,
    },
    // {
    //     name:"NMIXXTAPE",
    //     title:"엔믹스 커버",
    //     array: tapeList,
    // },
    // {
    //     name:"PICK NMIXX",
    //     title:"엔믹스 자체 콘텐츠",
    //     array: pickList,
    // },
    // {
    //     name:"MIXXPLORE",
    //     title:"엔믹스 리얼리티",
    //     array: mixxploreList,
    // },
    // {
    //     name:"이상한 나라의 엔믹스",
    //     title:"이상한 나라의 엔믹스",
    //     array: wonderlandList,
    // },
    // {
    //     name:"PICK NMIXX 방학시즌",
    //     title:"방학시즌",
    //     array: pickList,
    // },
    // {
    //     name:"SHOWCASE",
    //     title:"쇼케이스",
    //     array: showList,
    // }
]

export default controll;