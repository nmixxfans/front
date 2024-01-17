'use client'

import Link from "next/link";
import board from '../css/board.module.css';
import "../css/pagination.css";
import { KeyboardEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faCamera } from "@fortawesome/free-solid-svg-icons"; //포토
import { faVideo } from "@fortawesome/free-solid-svg-icons"; //영상
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; //설문
import { faFlag } from "@fortawesome/free-solid-svg-icons"; //공지
import { faClipboard } from "@fortawesome/free-solid-svg-icons"; //일반
import Pagination from "react-js-pagination";
import axios from "axios";




export default function Board() {

    interface datas {
        number: number,
        select: string,
        title: string,
        emoji: IconDefinition,
        writer: string,
        date: string,
        view: number,
        like: number
    }

    const datas: datas[] = [
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
    const [contents, setContents] = useState<datas[]>([]); //임시data
    const [selectData, setSelectData] = useState<string>(""); //말머리 value
    const [searchData, setSearchData] = useState<string>(""); //검색 input value
    const [type, setType] = useState<string>(""); //검색 select value
    const [page, setPage] = useState<number>(1); //페이지



    useEffect(() => {
        document.title = "자유게시판";
        setContents(datas);
        const data = async () => {
            const res = await axios({
                url: "http://localhost:3000/board/api/board?word=${word}",
                method: "GET",
            })
            setContents(res.data);
        }
        data()
    }, []);

    const handlePageChange = (page: number) => {
        setPage(page);
        console.log(page);
    };

    useEffect(() => {
        const selectDatas = async () => {
            const res = await axios({
                url: "http://localhost:3000/board/api/board?word=${word}",
                method: "GET",
                data: {
                    selectData: selectData, //임시
                }
            })
            setContents(res.data);
        }
        selectDatas();
        
    }, [selectData])//데이터요청


    const searchEnter = async () => {
        const res = await axios({
            url: "http://localhost:3000/board/api/board?word=${word}",
            method: "POST",
            data: {
                searchData: searchData, //임시
                select: type //임시
            }
        })
        setContents(res.data);
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
                {contents.map((content) => {
                    return (
                        <div key={content.number} className={board.mainBox}>
                            <div className={board.data1}>{content.number}</div>
                            <div className={board.data2}>{content.select}</div>
                            <div className={board.emoji}>{<FontAwesomeIcon icon={content.emoji}></FontAwesomeIcon>}</div>
                            <Link href={`/board/${content.number}`} className={board.content}>{content.title.length > 16 ? content.title.substring(0, 16) + "..." : content.title}</Link>
                            <div className={board.data4}>{content.writer}</div>
                            <div className={board.data5}>{content.date}</div>
                            <div className={board.data6}>{content.view}</div>
                            <div className={board.data7}>{content.like}</div>
                        </div>
                    )
                })}
                <div className={board.pageBox}>
                    <div></div>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={30}
                        totalItemsCount={1000}
                        pageRangeDisplayed={10}
                        prevPageText={"이전"}
                        nextPageText={"다음"}
                        onChange={handlePageChange}
                    />
                    <Link href={'/board/write'} className={board.link}>글쓰기</Link>
                </div>
                <div className={board.searchBox}>
                    <select className={board.searchSelect} onChange={(e) => setType(e.target.value)} >
                        <option value={"content"}>내용</option>
                        <option value={"titleAndContent"}>제목+내용</option>
                        <option value={"writer"}>작성자</option>
                    </select>
                    <input type="text" className={board.searchInput} placeholder="검색" onChange={(e) => setSearchData(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") { searchEnter() } }} />
                </div>
            </div>
        </section>
    )
}
