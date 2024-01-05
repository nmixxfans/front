import content from '../../css/content.module.css';
import IframeItem from './IframeItem';

export default function SelfContentBox(){

    // MV
    const mvList : string[] = ["MMtRxcy8PX0", "Rd2wppggYxo", "fqBAzCH4-9g", "EDnwWcFpObo", "5eh6Vj_vVg4", "kBwikDvbRbI", "p1bjnyDqI9k", "3GWscde8rM8", "0T8d3pRjmi4", "xBrrdxtyWHw"];

    // ON AIR
    const liveList : string[] = ["JU9HaXl7VQI", "5BVuy6EMga0", "-rV80mT4hVo", "iag6GIXiqHI", "bjYmi-YiMAI", "X_22nkMJ2_0", "zoiKrwvALzs", "hJzTNHnmjLQ", "poxvax5jzlg", "wIkRc3jUTEg", "5eU8ULwHUlE", "yRCMWbHsgrY", "fO6FMa5uwYs", "LI8nT6Ij9Vg", "62xkGtfpX0E", "SksPtiaTNtU", "iTdIsfO4sO0", "OXLLbzOgB0g", "mzFhKrUMooE", "mBHYTGs1y4Y", "dQbFoAHd0Jc", "FmpADRQS07I", "kISwoZZTeHM", "80Lro0__3jg", "DVHjMzNuhA0", "Ut9cbXYWETI", "r8g03XYe8JU", "t8QWinFD0Pw"];
    

    return (
        <div className={content.contentBox}>
            <div className={content.contentItemBox}>
                <div className={[content.itemTitle, content.noneBorderTop].join(' ')}>MV</div>
                <IframeItem list={mvList} />
            </div>
            <div>
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
                QUALIFYING
            </div>
        </div>
    )
}