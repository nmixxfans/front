'use client'

import { useEffect, useState } from "react";
import content from '../css/content.module.css'
import SelfContentBox from "./element/SelfContentBox";
import OutContentBox from "./element/OutContentBox";

export default function Content() {

    const [category, setCategory] = useState<boolean>(true);

    useEffect(()=>{
        document.title = "콘텐츠";
    }, [])

    return (
        <section className={content.section}>
            <div className={content.container}>
                <div className={content.categoryBox}>
                    <input type="radio" id="self" name="category" hidden defaultChecked />
                    <label htmlFor="self" className={content.categoryBtn} onClick={()=>setCategory(true)} >
                        공식채널
                    </label>
                    <input type="radio" id="out" name="category" hidden />
                    <label htmlFor="out" className={content.categoryBtn} onClick={()=>setCategory(false)}>
                        외부콘텐츠
                    </label>
                </div>
                {
                    category ? <SelfContentBox /> : <OutContentBox />
                }
            </div>
        </section>
    )
}
