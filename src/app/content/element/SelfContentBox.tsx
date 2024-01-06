import content from '../../css/content.module.css';
import IframeItem from './IframeItem';
import controll from '../data/data';

export default function SelfContentBox(){

    return (
        <div className={content.contentBox}>
            {
                controll.map((value, index)=>{
                    return(
                        <div key={index} className={content.contentItemBox}>
                            <div className={content.itemTitle} title={value.title}>{value.name}</div>
                            <IframeItem list={value.array} />
                        </div>
                    )
                    
                })
            }
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