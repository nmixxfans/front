"use client"

import { useState } from "react";
import send from "../css/send.module.css";

export default function Send(){

    const [isActive, setActive] = useState<boolean>(false);
    const handleDragStart = () => setActive(true);
    const handleDragEnd = () => setActive(false);

    const [category, setCategory] = useState<string>("");

    return(
        <section className={send.section}>
            <div className={send.container}>
                <div className={send.titleBox}>
                    <div className={send.title}>건의</div>
                </div>
                <div className={send.contentBox}>
                    <div className={send.noticeBox}>
                        <div className={send.notice}>
                            팬채널 추가 요청은 유튜브 채널, 구독자 50명 이상, 영상 5개 이상 채널만 받고 있습니다.
                        </div>
                    </div>
                    <div className={send.sendBox}>
                        <div className={send.categoryBox}>
                            <input type="radio" name="category" id="free" hidden/>
                            <label className={send.categoryBtn} htmlFor="free" onClick={()=>setCategory("free")}>자유게시판</label>
                            <input type="radio" name="category" id="fc" hidden/>
                            <label className={send.categoryBtn} htmlFor="fc" onClick={()=>setCategory("fc")}>팬채널</label>
                            <input type="radio" name="category" id="cn" hidden/>
                            <label className={send.categoryBtn} htmlFor="cn" onClick={()=>setCategory("cn")}>콘텐츠</label>
                            <input type="radio" name="category" id="con" hidden/>
                            <label className={send.categoryBtn} htmlFor="con" onClick={()=>setCategory("con")}>엔믹스콘</label>
                            <input type="radio" name="category" id="mn" hidden/>
                            <label className={send.categoryBtn} htmlFor="mn" onClick={()=>setCategory("mn")}>매니저</label>
                            <input type="radio" name="category" id="other" hidden/>
                            <label className={send.categoryBtn} htmlFor="other" onClick={()=>setCategory("other")}>기타</label>
                        </div>
                        <div className={send.content}>
                            <textarea className={send.text}></textarea>
                            <div className={send.fileBox}>
                                <input type="file" id="file" hidden/>
                                <label className={isActive ?  send.activeFileLabel : send.fileLabel } htmlFor="file" onDragEnter={handleDragStart} onDragLeave={handleDragEnd}>
                                    <div>클릭 혹은 파일을 이곳에 드롭하세요.</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}