"use client"

import Link from "next/link";
import nmixxcon from "../css/nmixxcon.module.css";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function MixxCon() {

    interface listData {
        id:number,
        title:string,
        nick:string,
        cover:string,
    }

    const datas : listData[] = [
        {
            id:1,
            title:"엔믹스콘V7",
            nick:"진규는 못말려",
            cover:"https://dcimg5.dcinside.com/dccon.php?no=62b5df2be09d3ca567b1c5bc12d46b394aa3b1058c6e4d0ca41648b650ed266e232828aee31476d966125351dbafad33db95d17e4929be1d2f83b95088582c9ba7ad95b889e10ba400"
        },
        {
            id:2,
            title:"엔믹스콘V5",
            nick:"진규는 못말려",
            cover:"https://dcimg5.dcinside.com/dccon.php?no=62b5df2be09d3ca567b1c5bc12d46b394aa3b1058c6e4d0ca41648b650ed266e232828aee31476d966125351dbafac3b0e1e0d6e1fae1c48aed7fb1bf8d06ba8e25f463a1ea1f5a173"
        },
    ]

    const [content, setContent] = useState<listData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        setLoading(true);
        setContent(datas);
        setLoading(false);
    }, [])

    return (
        
        <section className={nmixxcon.section}>
            {loading ? <Loading></Loading> :

            <div className={nmixxcon.container}>
                <div className={nmixxcon.titleBox}>
                    <div className={nmixxcon.title}>엔믹스콘</div>
                </div>
                <div className={nmixxcon.contentBox}>
                    <div className={nmixxcon.listBox}>
                        {
                            content.map((value, index)=>{
                                return(
                                    <div className={nmixxcon.listItem} key={index}>
                                        <Link href={`/mc/${value.id}`}>
                                            <img src="/list_img.png"/>
                                            <div>{value.title}</div>
                                            <div>{value.nick}</div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <div className={nmixxcon.pageBox}>
                        <div className={nmixxcon.page}></div>
                    </div>
                    <div className={nmixxcon.searchBox}>
                        <select className={nmixxcon.searchSelect}>
                            <option>이름</option>
                            <option>제작자</option>
                        </select>
                        <input className={nmixxcon.searchInput} />
                        <div className={nmixxcon.searchBtn}></div>
                    </div>
                </div>
            </div>
            
            }
        </section>
    )
}