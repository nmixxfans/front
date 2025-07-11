"use client"

import { useState } from "react";
import bw from "./boardWrite.module.css";
import Editor from "@/app/share/editor/Editor";
import { DefaultContainer } from "@/shared/ui/DefaultContainer";

export default function BoardWrite() {

  const [title, setTitle] = useState<string>("");

  return (
    <section>
      <DefaultContainer>
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
      </DefaultContainer>
    </section>
  )
}
