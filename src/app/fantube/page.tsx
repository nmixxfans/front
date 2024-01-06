"use client"

import { useState } from "react"
import fantube from "../css/fantube.module.css"
import KorFantube from "./element/KorFantube";
import ForFantube from "./element/ForFantube";

export default function Fantube() {

    const [category, setCategory] = useState<boolean>(true);


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
                <div className={fantube.updateDate}>
                    Latest Update - 2024-01-07
                </div>
                <div className={fantube.contentBox}>
                    {
                        category ? <KorFantube /> : <ForFantube />
                    }
                </div>
            </div>
        </section>
    )
}
