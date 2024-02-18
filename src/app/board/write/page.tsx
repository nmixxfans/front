"use client"

import { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import bw from "../../css/boardWrite.module.css";

export default function BoardWrite() {

  const [title, setTitle] = useState<string>("");

  const initialBlock = {
    id: 0,
    html: '',
    tag: 'p',
    flag:0,
  }

  // const [state, setState] = useState({ html: "", tagName: "div" });
  // const ref = useRef<HTMLDivElement>(null);

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
          {/* <EditableElement></EditableElement>
          <ContentEditable
            innerRef={ref}
            className={bw.editor}
            html={state.html}
            disabled={false}
            onChange={(e) => setState((prev) => ({ ...prev, html: e.target.value }))}
             /> */}
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
