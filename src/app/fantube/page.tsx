"use client"

import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import fantube from "../css/fantube.module.css"
import KorFantube from "./element/KorFantube";
import ForFantube from "./element/ForFantube";
import { useSearchParams } from "next/navigation";
import { fantubeState } from "../Atom";
import { useRecoilState } from "recoil";

export default function Fantube() {

  const params = useSearchParams();
  const [fantubeData, setFantubeData] = useRecoilState(fantubeState);
  const [fetching, setFetching] = useState(false);

  const [sort, setSort] = useState<"sub" | "name" | "view">("sub");
  const [country, setCountry] = useState<"ko" | "wo">("ko");
  const [page, setPage] = useState<number>(1);
  const [end, setEnd] = useState<boolean>(false);

  useEffect(() => {
    // console.log(params.get('sort'))
    // if (params.get('sort')) {
    //   setSort(params.get('sort') as "sub" | "name" | "view");
    // }

    // if (params.get('country')) {
    //   setCountry(params.get('country') as "ko" | "wo");
    // }

    // if (params.get('page')) {
    //   setPage(Number(params.get('page')));
    // }

    // getData();

  }, [])

  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/fantube?sort=${sort}&country=${country}&page=${page}`);
    const data = await res.json();
    console.log(res);
    console.log(data.fantube);
    if(data.result){
      if(data.fantube.length === 0){
        setEnd(true);
      }
      setFantubeData((prev) => [...prev, ...data.fantube]);
    }
  }

  useEffect(() => {
    console.log(page);
    if(page===0){
      setPage(1);
    }else{
      console.log("page에서 실행")
      if(end){
        return;
      }
      getData();
      setFetching(false);
    }
  }, [page]);

  const handleChangeSort = (e:ChangeEvent<HTMLSelectElement>)=>{
    setEnd(false);
    setSort(e.target.value as "sub" | "name" | "view");
    setFantubeData([]);
    setFetching(true);
    setPage(0);
  }

  const fetchMore = async () => {
    setFetching(true);
    setPage(page + 1);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !fetching) {
      fetchMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  const handleClickCountry = (countrys : "wo" | "ko")=>{
    setEnd(false);
    setCountry(countrys);
    setFantubeData([]);
    setFetching(true);
    setPage(0);
  }

  return (
    <section className={fantube.section}>
      <div className={fantube.container}>
        <div className={fantube.titleBox}>
          <div className={fantube.title}>NMIXX FAN CHANEL</div>
          <div className={fantube.selectBox}>
            <div className={fantube.categoryBox}>
              <input type="radio" id="kor" name="category" defaultChecked hidden />
              <label className={fantube.categoryBtn} htmlFor="kor" onClick={() => handleClickCountry("ko")}>국내</label>
              <input type="radio" id="for" name="category" hidden />
              <label className={fantube.categoryBtn} htmlFor="for" onClick={() => handleClickCountry("wo")}>해외</label>
            </div>
            <div className={fantube.selectContentBox}>
              <select className={fantube.select} onChange={(e:ChangeEvent<HTMLSelectElement>)=>handleChangeSort(e)}>
                <option value="sub">구독순</option>
                <option value="view">조회순</option>
                <option value="name">사전순</option>
              </select>
            </div>
          </div>
        </div>
        {/* <div className={fantube.updateDate}>
          최종 업데이트 : 2024-01-07
        </div> */}
        <KorFantube />
      </div>
    </section>
  )
}
