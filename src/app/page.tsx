import Image from 'next/image'
import home from './css/home.module.css';

export default function Home() {
    return (
        <section className={home.section}>
            <div className={home.firstBox}>
                <div>
                    <div className={home.title}>Recent M/V</div>
                    <iframe className={home.youtubePlayerMV} src="https://www.youtube.com/embed/MMtRxcy8PX0" title="NMIXX “Soñar (Breaker)” M/V" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className={home.contentBox}>
                    <div>
                        <div className={home.title}>Recent Content</div>
                        <iframe className={home.youtubePlayer} src="https://www.youtube.com/embed/Ijscl7Fb_vQ" title="산타요정 마을에 루시퍼의 등장이라….🎅🏻 MERRY NMIXXMAS🎄| PICK NMIXX" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div>
                        <div className={home.title}>Recent Live</div>
                        <iframe className={home.youtubePlayer} src="https://www.youtube.com/embed/-rV80mT4hVo" title="크리스마스 뒷풀이🎄🌨🎅" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}
