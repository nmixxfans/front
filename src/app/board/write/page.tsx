"use client"

import { useState } from "react";
import bw from "../../css/boardWrite.module.css";
import Editor from "@/app/share/editor/Editor";

export default function BoardWrite() {

  const [title, setTitle] = useState<string>("");

  const initialBlock = {
    id: 0,
    html: '',
    tag: 'p',
    flag:0,
  }

  

  return (
    <section className={bw.section}>
      <div className={bw.container}>
        <div className={bw.informationBox}>
          <div className={bw.horseHeadBox}>
            <input type="radio" name="horseHead" id="n" />
            <label htmlFor="n">일반</label>
          </div>
          <div className={bw.titleBox}>
            <input className={bw.title} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
          </div>
        </div>
        <div className={bw.editorBox}>
          <div className={bw.editorBtnBox}>

          </div>
          <div className={bw.editorContainer}>
            <Editor></Editor>
          </div>
        </div>
        <div className={bw.noticeBox}>
          안내사항
        </div>
        <div className={bw.saveBox}>
          <div className={bw.saveBtn}>저장</div>
        </div>
      </div>
    </section>
  )
}
