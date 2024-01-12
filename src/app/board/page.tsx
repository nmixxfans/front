'use client'

import Link from "next/link";
import board from '../css/board.module.css';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons"; //포토
import { faVideo } from "@fortawesome/free-solid-svg-icons"; //영상
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; //설문
import { faFlag } from "@fortawesome/free-solid-svg-icons"; //공지
import { faClipboard } from "@fortawesome/free-solid-svg-icons"; //일반
import axios from "axios";
import Pagination from "react-js-pagination";



export default function Board() {
    // const [datas, setDatas] = useState<[]>([]);
    const [selectData, setSelectData] = useState<any>(""); //말머리 value
    const [searchData, setSearchData] = useState<string>(""); //검색 input value
    const [type, setType] = useState<string>(""); //검색 select value


    const [posts, setPosts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(res.data);
        };
        fetchData();
    }, []);
    console.log("aa", posts)

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts:any) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };

    // pagination(< >) 버튼 누르면 curPage 변수를 바꾼다.
    // curPage가 바뀌면 axios.get 다시 한다.
    // 보기 편하도록 curPage를 화면에 그리시오.











    function Pagination({ currentPosts }: { currentPosts: any }) {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                <nav>
                    <ul className={board.pagination}>
                        {currentPosts.map((number) => (
                            <li key={number} className={board.pageitem}>
                                <span onClick={() => paginate(number)} className={board.pagelink}>
                                    {number}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    };



    const datas = [
        {
            number: 7,
            select: "공지",
            title: "[필독] 공지사항",
            emoji: faFlag,
            writer: "주먹펴고일어서",
            date: "24.01.09",
            view: 51371,
            like: 2958
        },
        {
            number: 6,
            select: "포토",
            title: "엔믹스 무대사진 모음",
            emoji: faCamera,
            writer: "스티븐 스필버그",
            date: "24.01.05",
            view: 1371,
            like: 2958
        },
        {
            number: 5,
            select: "영상",
            title: "엔믹스 신곡 무비",
            emoji: faVideo,
            writer: "베르너",
            date: "23.12.28",
            view: 778,
            like: 927
        },
        {
            number: 4,
            select: "공지",
            title: "[공지] 엔믹스 최고야 이야이야이야요",
            emoji: faFlag,
            writer: "박지성",
            date: "23.12.22",
            view: 532,
            like: 57
        },
        {
            number: 3,
            select: "일반",
            title: "엔믹스 최고야 라라라라라ㅏ라라라",
            emoji: faClipboard,
            writer: "손흥민",
            date: "23.12.19",
            view: 777,
            like: 357
        },
        {
            number: 2,
            select: "일반",
            title: "나랏말씀이 듕귁에 닿아 문자와 서로 사맣디 아니할세",
            emoji: faClipboard,
            writer: "마틴",
            date: "23.12.16",
            view: 999,
            like: 558
        },
        {
            number: 1,
            select: "설문",
            title: "엔믹스가 왜 성공하지 못하는지",
            emoji: faPenToSquare,
            writer: "이원노",
            date: "23.12.11",
            view: 421,
            like: 280
        },
    ];
    useEffect(() => {

    }, [selectData])//데이터요청

    useEffect(() => {
        document.title = "자유게시판";
    }, []);

    const searchEnter = async () => {
        searchData
    }


    return (
        <section className={board.section}>
            <div className={board.container}>
                <div className={board.headBox}>
                    <div className={board.headWrapper}>
                        <div className={board.title}>
                            자유게시판
                        </div>
                        <input type="radio" id="standard" name="category" defaultChecked hidden />
                        <label htmlFor="standard" className={board.listBox} onClick={() => setSelectData("일반")}>일반</label>
                        <input type="radio" id="notice" name="category" hidden />
                        <label htmlFor="notice" className={board.listBox} onClick={() => setSelectData("공지")}>공지</label>
                        <input type="radio" id="photo" name="category" hidden />
                        <label htmlFor="photo" className={board.listBox} onClick={() => setSelectData("포토")}>포토</label>
                        <input type="radio" id="video" name="category" hidden />
                        <label htmlFor="video" className={board.listBox} onClick={() => setSelectData("영상")}>영상</label>
                        <input type="radio" id="que" name="category" hidden />
                        <label htmlFor="que" className={board.listBox} onClick={() => setSelectData("설문")}>설문</label>
                    </div>
                    <div>
                        <Link href={'/board/write'} className={board.link}>글쓰기</Link>
                    </div>
                </div>
                <div className={board.mainBox}>
                    <div className={board.headerData1}>번호</div>
                    <div className={board.headerData2}>말머리</div>
                    <div className={board.headerData3}>제목</div>
                    <div className={board.headerData4}>작성자</div>
                    <div className={board.headerData5}>작성일</div>
                    <div className={board.headerData6}>조회수</div>
                    <div className={board.headerData7}>추천</div>
                </div>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>{post.title}</li>
                    )
                })}
                {/* {datas.map((data) => {
                    return (
                        <div key={data.number} className={board.mainBox}>
                            <div className={board.data1}>{data.number}</div>
                            <div className={board.data2}>{data.select}</div>
                            <div className={board.emoji}>{<FontAwesomeIcon icon={data.emoji}></FontAwesomeIcon>}</div>
                            <div className={board.data3}>{data.title.length > 16 ? data.title.substring(0, 16) + "..." : data.title}</div>
                            <div className={board.data4}>{data.writer}</div>
                            <div className={board.data5}>{data.date}</div>
                            <div className={board.data6}>{data.view}</div>
                            <div className={board.data7}>{data.like}</div>
                        </div>
                    )
                })} */}
                <div className={board.pageBox}>
                    <div></div>
                    <Pagination
                    
                    >

                    </Pagination>
                    <Link href={'/board/write'} className={board.link}>글쓰기</Link>
                </div>
                <div className={board.searchBox}>
                    <select className={board.searchSelect}  >
                        <option value={"content"}>내용</option>
                        <option value={"titleAndContent"}>제목+내용</option>
                        <option value={"writer"}>작성자</option>
                    </select>
                    <input type="text" className={board.searchInput} placeholder="검색" onChange={(e) => setSearchData(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") { } }} />
                </div>
            </div>
        </section>
    )
}
