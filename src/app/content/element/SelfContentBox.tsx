import content from '../../css/content.module.css';
import IframeItem from './IframeItem';

export default function SelfContentBox(){

    // MV
    const mvList : any[] = ["MMtRxcy8PX0", "Rd2wppggYxo", "fqBAzCH4-9g", "EDnwWcFpObo", "5eh6Vj_vVg4", "kBwikDvbRbI", "p1bjnyDqI9k", "3GWscde8rM8", "0T8d3pRjmi4", "xBrrdxtyWHw"];

    // ON AIR
    const liveList : any[] = ["JU9HaXl7VQI", "5BVuy6EMga0", "-rV80mT4hVo", "iag6GIXiqHI", "bjYmi-YiMAI", "X_22nkMJ2_0", "zoiKrwvALzs", "hJzTNHnmjLQ", "poxvax5jzlg", "wIkRc3jUTEg", "5eU8ULwHUlE", "yRCMWbHsgrY", "fO6FMa5uwYs", "LI8nT6Ij9Vg", "62xkGtfpX0E", "SksPtiaTNtU", "iTdIsfO4sO0", "OXLLbzOgB0g", "mzFhKrUMooE", "mBHYTGs1y4Y", "dQbFoAHd0Jc", "FmpADRQS07I", "kISwoZZTeHM", "80Lro0__3jg", "DVHjMzNuhA0", "Ut9cbXYWETI", "r8g03XYe8JU", "t8QWinFD0Pw", "FNKd5MU7cLI", "HfydNxEIuIA", "9xG2ksQS5pU", "qvEM-VFaxxo", "eSfyxKYm5pI", "b9P2-HIy2E4", "KQ8R0scPwOI", "PPdp1jFvJSE", "ClxtL2a4OKc", "LYZKffqaRpo", "1dXMEuvsHNY", "LBok11Bd1Hw", "YcwFNeg5-fw", "VQmVftQHW28", "qzvOQ7PL_dw", "jugL1CObJ7Q", "FmQKuuDkn2A", "W51-uYUVbb4", "GjIj4uuAQZU", "eElR_wU75JI", "I3afoUxGOFk", "soin54KdVqo", "RLlS4VKtX4c", "y2S04nqMnt0", "lzbNnZzWM1I", "vmSpln1du0U", "rZuiVCOtXdU", "cq57YL0ITDA", "uViW0jELth4", "Q8z8Zr681_w", "-QjJ5T-GYHI", "Hx3iifRIYv0", "jkxWjuktXsg", "c6MWz9-F-vw", "HyVC9bXfl7c", "4dymlCcWyXU"];
    
    // showcase
    const showList : any[] = ["2Iu6W6r2OC0", "zEHwlz8YYY8", {href:"29309193", src:"https://phinf.pstatic.net/tvcast/20220920_273/TgX7X_1663613148187zDp1Y_PNG/entwurf.png?type=now720"} ,"S0QiN6cX3zg"]

    return (
        <div className={content.contentBox}>
            <div className={content.contentItemBox}>
                <div className={[content.itemTitle, content.noneBorderTop].join(' ')}>MUSIC VIDEO</div>
                <IframeItem list={mvList} />
            </div>
            <div className={content.contentItemBox}>
                <div className={content.itemTitle}>NMIXX ON AIR</div>
                <IframeItem list={liveList} />
            </div>
            <div>
                PICK NMIXX
            </div>
            <div>
                MIXXTREAM
            </div>
            <div>
                MIXXTAPE
            </div>
            <div>
                MIXXTORY
            </div>
            <div>
                이상한 나라의 엔믹스
            </div>
            <div className={content.contentItemBox}>
                <div className={content.itemTitle}>SHOWCASE</div>
                <IframeItem list={showList} />
            </div>
            <div>
                QUALIFYING
            </div>
        </div>
    )
}