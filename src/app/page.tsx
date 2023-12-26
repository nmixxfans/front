'use client'

import Image from 'next/image'
import home from './css/home.module.css';
import { faTv, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <section className={home.section}>
            <div className={home.firstBox}>
                <div>
                    <div className={home.title} title='최신 뮤직비디오'></div>
                    <iframe className={home.youtubePlayerMV} src="https://www.youtube.com/embed/MMtRxcy8PX0" title="NMIXX “Soñar (Breaker)” M/V" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <div className={home.secondBox}>
                <div>
                    
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div className={home.thirdBox}>
                <div className={home.contentBox}>
                    <div>
                        <div className={home.title} title='최신 자컨'>Recent Content</div>
                        <iframe className={home.youtubePlayer} src="https://www.youtube.com/embed/Ijscl7Fb_vQ" title="산타요정 마을에 루시퍼의 등장이라….🎅🏻 MERRY NMIXXMAS🎄| PICK NMIXX" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div>
                        <div className={home.title} title='최신 라이브'>Recent Live<div className={home.onAir}><div className={home.onAirContent}></div></div></div>
                        <iframe className={home.youtubePlayer} src="https://www.youtube.com/embed/-rV80mT4hVo" title="크리스마스 뒷풀이🎄🌨🎅" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
