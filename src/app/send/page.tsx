"use client"

import { ChangeEvent, DragEvent, useRef, useState } from "react";
import send from "../css/send.module.css";
import {
    faFile
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Send(){

    const [isActive, setActive] = useState<boolean>(false);
    const [fileInfor, setFileInfor] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const fileInput = useRef<HTMLInputElement | null>(null);

    const handleDragStart = () => setActive(true);
    const handleDragEnd = () => setActive(false);

    const handleDragOver = (e:DragEvent<HTMLLabelElement>) => {
        setActive(true)
        e.preventDefault();  // 필수 1
      };

    const handleDrop = (e:DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
    
        const file = e.dataTransfer.files[0];
        console.log(file);
        setActive(false);
        setFileInfor(file.name)
        
        // readImage(file);
        
    
        // 드롭된 파일 핸들링
        // ...
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            const file = e.target.files[0];
            setFileInfor(file.name);
        }
    }

    const handleSendClick = ()=>{
        if(category===""){
            alert("분류를 선택해주세요.")
            return;
        }

        if(content.length < 10){
            alert("내용을 10자 이상 입력해주세요.")
            return;
        }

        
        console.log("전송")
    }

    // 엑스버튼 누르면 첨부파일 초기화
    const handleInputFileDelete = ()=>{
        if(!fileInput.current){
            return;
        }
        fileInput.current.value = "";
        setFileInfor("")
    }

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
                            <textarea className={send.text} value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                            <div className={send.fileBox}>
                                <label className={isActive ? [send.fileLabel, send.fileActive].join(' ') : send.fileLabel} htmlFor="file" onDragEnter={handleDragStart} onDragLeave={handleDragEnd} onDrop={(e)=>handleDrop(e)} onDragOver={(e)=>handleDragOver(e)}>
                                    <input type="file" id="file" hidden onChange={handleInputChange} ref={fileInput}/>
                                    <FontAwesomeIcon className={send.fileIcon} icon={faFile} />
                                    <div className={send.fileText}>클릭 혹은 파일을 이곳에 드롭하세요</div>
                                    <div className={send.fileTextDetail}>(최대 10MB)</div>
                                </label>
                            </div>
                            <div className={send.fileSendBox}>
                                <div className={send.fileInformationBox}>
                                    {fileInfor.length === 0 ?
                                        <></> :
                                        <>
                                            <div className={send.fileName}>{fileInfor}</div>
                                            <div className={send.fileDelete} onClick={handleInputFileDelete}>x</div>
                                        </>
                                    }
                                    
                                </div>
                                <div className={send.saveBtn} onClick={handleSendClick}>전송</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}