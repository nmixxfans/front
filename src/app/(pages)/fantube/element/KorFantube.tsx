import { useRecoilState } from "recoil";
import fantube from "../fantube.module.css"
import { fantubeState } from "@/app/shared/Atom";

export default function KorFantube(){

    const [fantubeData] = useRecoilState(fantubeState);

    return (
        <div className={fantube.contentBox}>
            {
                fantubeData.map((value, index)=>{
                    return (
                        <div className={fantube.chanelItem} key={index}>
                            <a href={value.url} target="_blank" className={fantube.chanelLink}>
                                <img src={value.cover_img} className={fantube.chanelImg} />
                                <div className={fantube.chanelText}>
                                    <span className={fantube.chanelName}>{value.name}</span>
                                    <span className={fantube.chanelPoint}>&nbsp;·&nbsp;</span>
                                    <span className={fantube.chanelSub}>{value.sub}</span>
                                </div>
                                <div className={fantube.chanelText}>
                                    <span className={fantube.chanelView}>{value.view}회</span>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}