'use client'

import Link from 'next/link'
import header from './header.module.css'
import {
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from 'recoil';
import { userState } from '../Atom';
import { useEffect } from 'react';

export default function Header() {

  const [sign, setSign] = useRecoilState(userState);

  useEffect(()=>{
    console.log(sign);
  }, [sign])

  const handleLogout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/logout`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json();
    if(data.result){
      window.location.href = '/signin'
    }
  }

  return (
    <header className={header.header}>
      <div className={header.headerIconContainer}>
        <div className={header.siteLogoBox}>
          <Link href={'/'} className={header.siteLogo}><img className={header.logoImg} src='/wenmixx_logo.png'></img></Link>
        </div>

        {sign.id === 0 ?
          <div className={header.userBtnBox}>
            <Link href={'/signin'} className={header.signBtn} title='로그인'>로그인</Link>
          </div>
          :
          <div className={header.userBtnBox}>
            <Link href={'/mypage'} className={header.signBtn}><FontAwesomeIcon title='마이페이지' icon={faUser} /></Link>
            <div className={header.signBtn} title='로그아웃' onClick={handleLogout}>로그아웃</div>
          </div>
        }
      </div>
      <div className={header.linkBox}>
        <Link href={'/content'}>콘텐츠</Link>
        <Link href={'/fantube'}>팬채널</Link>
        <Link href={'/board'}>자유게시판</Link>
        <Link href={'/notice'}>공지사항</Link>
        <Link href={'/mc'}>엔믹스콘</Link>
        <Link href={'/apply'}>매니저신청</Link>
        <Link href={'/send'}>건의</Link>
      </div>
    </header>
  )

}