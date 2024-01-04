import { useEffect } from 'react';
import content from '../../css/content.module.css';

export default function SelfContentBox(){

    // MV
    const mvList : string[] = ["MMtRxcy8PX0", "Rd2wppggYxo", "fqBAzCH4-9g", "EDnwWcFpObo", "5eh6Vj_vVg4", "kBwikDvbRbI", "p1bjnyDqI9k", "3GWscde8rM8", "0T8d3pRjmi4", "xBrrdxtyWHw"];

    return (
        <div className={content.contentBox}>
            <div className={content.contentItemBox}>
                <div className={content.itemTitle}>MV</div>
                <div className={content.itemList}>
                    {
                        mvList.map((value, index)=>{
                            return(
                                <iframe key={index} className={content.yt} src={`https://www.youtube.com/embed/${value}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            )
                        })
                    }
                    
                </div>
            </div>
            <div>
                NMIXX ON AIR
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
                절레전래동하가족
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