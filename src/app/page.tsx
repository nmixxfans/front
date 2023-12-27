// 'use client'

import Image from 'next/image'
import home from './css/home.module.css';
import { faTv, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Client } from "twitter-api-sdk";
import Twit from 'twit';
import axios from 'axios'

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
    ]

    // // Twitter API 키 및 액세스 토큰 설정
    // const twitterConfig = {
    //     consumer_key: '6TK4o5AolOLWrfAbgMXQCfqtB',
    //     consumer_secret: '9XtUr5y1p1mwiommXzKXakCpKWk6EoIAY0WdaGBQ9jDbwC2RIe',
    //     access_token: '1897017314-rTbVUjHZ0raeIaUkDqy4mEKS2aUGnEo9oj0neGf',
    //     access_token_secret: '10UlZskteNwqBDTUjNPlHhaGIOBVf1Snsb8ybh6p2x3Pz',
    // };

    // // Twit 인스턴스 생성
    // const twitter = new Twit(twitterConfig);

    // // 특정 사용자의 트윗 가져오기
    // const screenName = 'NMIXX_official';
    // twitter.get('statuses/user_timeline', { screen_name: screenName, count: 10 }, (err, data, response) => {
    //     if (err) {
    //         console.error('Error:', err);
    //     } else {
    //         console.log('Tweets:', data);
    //     }
    // });

    // const client = new Client("AAAAAAAAAAAAAAAAAAAAAPazrgEAAAAAjjKlWGAnxqcZuz%2FbAUbzufjHK%2BA%3DrK90t1WzsvXqu0ZfqgwbuKb3YmsgT1I7WKKChA1b3g9iyuqU0n");


    // async function main() {
    //     const tweet = await client.tweets.findTweetById("20");
    //     console.log(tweet.data?.text);
    //   }
      
    // main();

    // async function twitter() {
    //     const stream = client.tweets.sampleStream({
    //         "tweet.fields": ["author_id"],
    //     });
    //     for await (const tweet of stream) {
    //         console.log(tweet.data?.author_id);
    //     }
    // }

    // twitter();

    // axios({
    //     method:"GET",
    //     url:"https://publish.twitter.com/oembed?url=https://twitter.com/NMIXX_official/status/1731599232577012072"
    // }).then((res)=>{
    //     console.log(res);
    // })

    return (
        <section className={home.section}>
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
                        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    </div>
                </div>
                <div className={home.secondBoxItem}>
                    <div className={home.title} title='자유게시판'>자유게시판</div>
                    <div className={home.secondBoxContent}>

                    </div>
                </div>
                <div className={home.secondBoxItem}>
                    <div className={home.title} title='공지사항'>공지사항</div>
                    <div className={home.secondBoxContent}>

                    </div>
                </div>
            </div>
            <div className={home.thirdBox}>
                <div className={home.contentBox}>
                    <div>
                        <div className={home.title} title='최신 자컨'>Recent Content</div>
                        <iframe className={home.youtubePlayer} src="https://www.youtube.com/embed/f7fRsRqNBPY" title="완전 제 이상형이에요… 아바타 소개팅💖 | 차개듀 우리만 재밌는 거 아니지? EP.7" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
