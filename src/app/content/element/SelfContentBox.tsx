import content from '../../css/content.module.css';
import IframeItem from './IframeItem';

export default function SelfContentBox(){

    // MV
    const mvList : string[] = ["MMtRxcy8PX0", "Rd2wppggYxo", "fqBAzCH4-9g", "EDnwWcFpObo", "5eh6Vj_vVg4", "kBwikDvbRbI", "p1bjnyDqI9k", "3GWscde8rM8", "0T8d3pRjmi4", "xBrrdxtyWHw"];

    // ON AIR
    const liveList : string[] = ["JU9HaXl7VQI", "5BVuy6EMga0", "-rV80mT4hVo"];
    

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