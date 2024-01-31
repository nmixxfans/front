'use client'

import { ChangeEvent, useRef, useState } from "react";
import style from "../../css/nmixxcon-upload.module.css";
import {
  faCirclePlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function MixxConUpload() {

  const coverRef = useRef<HTMLInputElement>(null);

  const [cover, setCover] = useState<File>();
  const [coverUrl, setCoverUrl] = useState<string>("/cover.png");
  const [file, setFile] = useState<File[]>([]);

  const handleCoverImg = (e: ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files){
      setCover(e.target.files[0]);

      let value = URL.createObjectURL(e.target.files[0]); 
      setCoverUrl(value);
    }
    
  }

  const handleNmixxconImg = (e: ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.files);
  }

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
            <div className={style.coverImgUpload}>
              <input ref={coverRef} type="file" className={style.fileInput} id="cover" accept="image/gif, image/jpeg, image/png" onChange={handleCoverImg}/>
              <label htmlFor="cover" className={style.coverImgUploadBtn}>표지 업로드</label>
            </div>
          </div>
          <div className={style.nmixxconBox}>
            <div className={style.nmixxcon}>
              {
                file.map((value, index)=>{
                  return(
                    <div className={style.nmixxconImg} key={index}>
                      <img alt="엔믹스콘 이미지" src={value.name} className={style.nmixxconImg} />
                    </div>
                  )
                })
              }
              {
                file.length >= 30 ?
                <></> : 
                <>
                  <input onChange={handleNmixxconImg} id="nmixxcon" type="file" multiple  accept="image/gif, image/jpeg, image/png" className={style.nmixxconInput} />
                  <label htmlFor="nmixxcon" className={style.uploadBtn}>
                    <FontAwesomeIcon icon={faCirclePlus} className={style.fileIcon} />
                    이미지 업로드
                  </label>
                </>
              }
            </div>
          </div>
          <div className={style.controllBox}>
            <div className={style.saveBtn}>등록</div>
          </div>
        </div>
      </div>
    </section>
  )
}