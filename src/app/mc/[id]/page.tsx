'use client'

import { useState } from "react";
import style from "../../css/nmixxcon-information.module.css";

export default function MixxConView() {

  const [coverUrl, setCoverUrl] = useState<string>("/cover.png");
  const [nmixxcon, setNmixxcon] = useState<string[]>([]);

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.titleBox}>
          <div className={style.title}>엔믹스콘</div>
        </div>
        <div className={style.contentBox}>
          <div className={style.coverBox}>
            <div className={style.coverImgBox}>
              <img src={coverUrl} alt="커버이미지" className={style.coverImg} />
            </div>
            <div className={style.informaionBox}>
              <div className={style.createrBox}>
                <div className={style.nmixxconName}>
                  엔믹스콘 V.5
                </div>
                <div className={style.createrNick}>
                  닉네임
                </div>
              </div>
              <div className={style.btnBox}>
                <div className={style.modifyBtn}>
                  수정
                </div>
                <div className={style.getBtn}>
                  담기
                </div>
                <div className={style.deleteBtn}>
                  삭제
                </div>
              </div>
            </div>
            
          </div>
          <div className={style.nmixxconBox}>
            <div className={style.nmixxcon}>
              {
                nmixxcon.map((value, index) => {
                  return (
                    <div className={style.nmixxconImg} key={index}>
                      <img alt="엔믹스콘 이미지" src={value} className={style.nmixxconImg} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}