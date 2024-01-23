"use client"

import { useEffect, useState } from "react"
import fantube from "../css/fantube.module.css"
import KorFantube from "./element/KorFantube";
import ForFantube from "./element/ForFantube";
import { useSearchParams } from "next/navigation";
import { fantubeState } from "../Atom";
import { useRecoilState } from "recoil";

export default function Fantube() {

    const params = useSearchParams();
    const [fantubeData, setFantubeData] = useRecoilState(fantubeState);
    
    const [category, setCategory] = useState<boolean>(true);
    const [sort, setSort] = useState<"sub" | "name" | "view">("sub");
    const [country, setCountry] = useState<"ko"| "wo">("ko");
    const [page, setPage] = useState<number>(1);

    useEffect(()=>{
        if(params.get('sort')){
            setSort(params.get('sort'));
        }

        if(params.get('country')){
            setCountry(params.get('country'));
        }

        if(params.get('page')){
            setPage(Number(params.get('page')));
        }
        
        setFantubeData([]);
    }, [])

    return (
        <section className={fantube.section}>
            <div className={fantube.container}>
                <div className={fantube.titleBox}>
                    <div className={fantube.title}>NMIXX FAN CHANEL</div>
                    <div className={fantube.selectBox}>
                        <div className={fantube.categoryBox}>
                            <input type="radio" id="kor" name="category" defaultChecked hidden/>
                            <label className={fantube.categoryBtn} htmlFor="kor" onClick={()=>setCategory(true)}>국내</label>
                            <input type="radio" id="for" name="category" hidden/>
                            <label className={fantube.categoryBtn} htmlFor="for" onClick={()=>setCategory(false)}>해외</label>
                        </div>
                        <div className={fantube.selectContentBox}>
                            <select className={fantube.select}>
                                <option value="sub">구독순</option>
                                <option value="view">조회순</option>
                                <option value="abc">사전순</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* <div className={fantube.updateDate}>
                    최종 업데이트 : 2024-01-07
                </div> */}

                {
                    category ? <KorFantube /> : <ForFantube />
                }

            </div>
        </section>
    )
}
