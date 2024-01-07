import mvList from "./information/mvList"
import liveList from "./information/liveList"
import tapeList from "./information/tapeList";
import showList from "./information/showList";
import wonderlandList from "./information/wonderlandList";
import storyList from "./information/storyList";
import videoInformation from "./videoInformationType";
import vlogList from "./information/vlogList";

interface information {
    name:string,
    title:string,
    array:any[],
}

// // PICK NMIXX
// const pickList : videoInformation[] = ["-PzxEYYjwT8", "Ijscl7Fb_vQ", "hQ7JpXVVn_I", "fP7WX8gfBJo" ,"boYRBUyMoLY", "xHSrM6tDXnk", "5raLpQEw1lM", "Tvvi4OLZSUk", "Ep54VUSje8c", "QB0N_3IxxAo", ]

// // MIXXPLORE
// const mixxploreList : videoInformation[] = ["ju51oAPk9XM", "2lZqFVU-Qko", "WSrYSNpBQ0A", "p-bLq4cdNis", "30f2twUtvNE"]

// // 이상한 나라의 엔믹스
// const wonderlandList : videoInformation[] = [];

// // 픽엔믹스 방학시즌
// const vacationList : any[] = ["1_htJk-pyIc", "YuztLfRnLsU", "Ud2z7GTQPcM", "4aC4kXpNNpg", "EBufRNbl62Q"]

// // showcase
// const showList : any[] = []

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
    {
        name:"MIXXTAPE",
        title:"엔믹스 커버",
        array: tapeList,
    },
    {
        name:"MIXXTREAM",
        title:"엔믹스 브이로그",
        array: vlogList,
    },
    {
        name:"MIXXTORY",
        title:"엔믹스 개인 브이로그",
        array: storyList,
    },
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
    {
        name:"이상한 나라의 엔믹스",
        title:"이상한 나라의 엔믹스",
        array: wonderlandList,
    },
    // {
    //     name:"PICK NMIXX 방학시즌",
    //     title:"방학시즌",
    //     array: pickList,
    // },
    {
        name:"SHOWCASE",
        title:"쇼케이스",
        array: showList,
    }
]

export default controll;