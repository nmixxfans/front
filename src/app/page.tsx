'use client'

import Link from 'next/link';
import home from './css/home.module.css';
import { useEffect, useState } from 'react';
import Script from 'next/script'

export default function Home() {

    const exampleData = [
        {
            title: "엔믹스 컴백 하루 전",
            content: "미쳤다",
            id: 1,
            create_date: "2023.12.28"
        },
        {
            title: "엔믹스 컴백 언제임?",
            content: "제목이 곧 내용",
            id: 2,
            create_date: "2023.12.28"
        },
        {
            title: "배진솔 미쳤다",
            content: "그냥 미쳤다",
            id: 3,
            create_date: "2023.12.28"
        },
        {
            title: "엔믹스 컴백 빨리해",
            content: "미쳤다",
            id: 4,
            create_date: "2023.12.27"
        },
        {
            title: "최강 엔믹스",
            content: "제목이 곧 내용",
            id: 5,
            create_date: "2023.12.27"
        },
        {
            title: "배진솔 미쳤다22",
            content: "그냥 미쳤다",
            id: 6,
            create_date: "2023.12.27"
        },
        {
            title: "배진솔 그냥 미쳤다",
            content: "그냥 미쳤다",
            id: 7,
            create_date: "2023.12.28"
        },
        {
            title: "엔믹스 컴백 빨리해",
            content: "미쳤다",
            id: 8,
            create_date: "2023.12.27"
        },
        {
            title: "최강 엔믹스",
            content: "제목이 곧 내용",
            id: 9,
            create_date: "2023.12.27"
        },
        {
            title: "배진솔 미쳤다33",
            content: "그냥 미쳤다",
            id: 10,
            create_date: "2023.12.27"
        },
    ]

    const [board, setBoard] = useState<any[]>([]);
    const [notice, setNotice] = useState<any[]>([]);

    const [debut, setDebut] = useState<number>(0);

    useEffect(()=>{
        document.title = "WE-NMIXX";
        setBoard(exampleData);
        setNotice(exampleData);

        const diffDate = new Date().getTime() - new Date("2022-02-22").getTime();
        setDebut(Math.ceil(diffDate / (1000 * 60 * 60 * 24)))
    }, [])

    return (
        <section className={home.section}>
            {/* 트위터 스타일, 기능 Script 태그 */}
            <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></Script>
            <div className={home.firstBox}>
                <div>
                    <div className={home.title} title='최신 뮤직비디오'></div>
                    <iframe className={home.youtubePlayerMV} src="https://www.youtube.com/embed/MMtRxcy8PX0" title="NMIXX “Soñar (Breaker)” M/V" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <div className={home.secondBox}>
                <div className={home.secondBoxItem}>
                    <div className={home.title} title='최신 트위터'>NMIXX_Official_X</div>
                    <div className={[home.secondBoxContent, home.boxScroll].join(" ")}>
                        <blockquote className="twitter-tweet"><p lang="ko" dir="ltr">[🐥] HAPPY BAE DAY<br /><br />오늘은 배이가 주인공 🎀<br /><br />배이를 위한 NMIXX의<br />릴레이 소설 Start! 📝<br /><br />“오늘은 진솔이의 생일 파티가<br />있는 날이에요~🥳”<a href="https://twitter.com/hashtag/NMIXX?src=hash&amp;ref_src=twsrc%5Etfw">#NMIXX</a> <a href="https://twitter.com/hashtag/%EC%97%94%EB%AF%B9%EC%8A%A4?src=hash&amp;ref_src=twsrc%5Etfw">#엔믹스</a><a href="https://twitter.com/hashtag/%EB%B0%B0%EC%9D%B4?src=hash&amp;ref_src=twsrc%5Etfw">#배이</a> <a href="https://twitter.com/hashtag/BAE?src=hash&amp;ref_src=twsrc%5Etfw">#BAE</a><a href="https://twitter.com/hashtag/HAPPY_BAE_DAY?src=hash&amp;ref_src=twsrc%5Etfw">#HAPPY_BAE_DAY</a><a href="https://twitter.com/hashtag/%EB%94%B0%EC%8A%A4%ED%95%9C_%EB%B0%B0%EC%9D%B4%EC%9D%98_%EC%8A%A4%EB%AC%B4%EB%B2%88%EC%A7%B8_%EA%B3%84%EC%A0%88?src=hash&amp;ref_src=twsrc%5Etfw">#따스한_배이의_스무번째_계절</a> <a href="https://t.co/kLwMBmRNkk">pic.twitter.com/kLwMBmRNkk</a></p>&mdash; NMIXX (@NMIXX_official) <a href="https://twitter.com/NMIXX_official/status/1740251233632309471?ref_src=twsrc%5Etfw">December 28, 2023</a></blockquote>
                        <blockquote className="twitter-tweet"><p lang="ko" dir="ltr">[📢] SBS <a href="https://twitter.com/hashtag/%EA%B3%BC%EB%AA%B0%EC%9E%85%EC%9D%B8%EC%83%9D%EC%82%AC?src=hash&amp;ref_src=twsrc%5Etfw">#과몰입인생사</a> 온라인 제작발표회<br /><br />잠시 후 2:00PM<br />NMIXX 해원과 함께하세요!<a href="https://t.co/77wgtEjqE3">https://t.co/77wgtEjqE3</a><a href="https://twitter.com/hashtag/NMIXX?src=hash&amp;ref_src=twsrc%5Etfw">#NMIXX</a> <a href="https://twitter.com/hashtag/%EC%97%94%EB%AF%B9%EC%8A%A4?src=hash&amp;ref_src=twsrc%5Etfw">#엔믹스</a><a href="https://twitter.com/hashtag/%ED%95%B4%EC%9B%90?src=hash&amp;ref_src=twsrc%5Etfw">#해원</a> <a href="https://twitter.com/hashtag/HAEWON?src=hash&amp;ref_src=twsrc%5Etfw">#HAEWON</a><a href="https://twitter.com/hashtag/Fe3O4_BREAK?src=hash&amp;ref_src=twsrc%5Etfw">#Fe3O4_BREAK</a><a href="https://twitter.com/hashtag/So%C3%B1ar?src=hash&amp;ref_src=twsrc%5Etfw">#Soñar</a></p>&mdash; NMIXX (@NMIXX_official) <a href="https://twitter.com/NMIXX_official/status/1740231097500516646?ref_src=twsrc%5Etfw">December 28, 2023</a></blockquote>
                    </div>
                </div>
                <div className={home.secondBoxItem}>
                    <div className={home.title} title='자유게시판'>자유게시판</div>
                    <div className={[home.secondBoxContent, home.boxScroll].join(" ")}>
                        {
                            board.map((value, index)=>{
                                return(
                                    <div className={home.boardItem} key={index}>
                                        <div className={home.boardTitle}>
                                            <Link href={`/board/${value.id}`} className={home.boardTitleLink}>
                                                {value.title}
                                            </Link>
                                        </div>
                                        <div className={home.boardDate}>
                                            {value.create_date}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={home.secondBoxItem}>
                    <div className={home.title} title='공지사항'>공지사항</div>
                    <div className={[home.secondBoxContent, home.boxScroll].join(" ")}>
                        {
                            notice.map((value, index)=>{
                                return(
                                    <div className={home.boardItem} key={index}>
                                        <div className={home.boardTitle}>
                                            <Link href={`/notice/${value.id}`} className={home.boardTitleLink}>
                                                {value.title}
                                            </Link>
                                        </div>
                                        <div className={home.boardDate}>
                                            {value.create_date}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={home.thirdBox}>
                <div className={home.contentBox}>
                    <div>
                        <div className={home.title} title='최신 엔믹스'>NMIXX NEW</div>
                        <iframe className={home.youtubePlayer} src="https://www.youtube.com/embed/-PzxEYYjwT8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div>
                        <div className={home.title} title='엔믹스 최신 라이브'>NMIXX ON AIR<div className={home.onAir}><div className={home.onAirContent}></div></div></div>
                        <iframe className={home.youtubePlayer} src="https://www.youtube.com/embed/JU9HaXl7VQI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className={home.fourthBox}>
                <div>
                    데뷔일로부터 + {debut}
                </div>
            </div>
            
        </section>
    )
}
