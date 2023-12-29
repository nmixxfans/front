'use client'

import Link from 'next/link'
import header from '../css/header.module.css'
import {
    faArrowRightToBracket,
    faArrowRightFromBracket,
    faUser
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from 'recoil';
import { signState } from '../Atom';

export default function Header(){

    const [sign, setSign] = useRecoilState(signState)

    return(
        <header className={header.header}>
            <div className={header.headerIconContainer}>
                <div className={header.siteLogoBox}>
                    <Link href={'/'} className={header.siteLogo}><img className={header.logoImg} src='/wenmixx_logo.png'></img></Link>
                </div>

                {sign.length === 0 ?
                <div className={header.userBtnBox}>
                    <Link href={'/signin'} className={header.signBtn}><FontAwesomeIcon title='로그인' icon={faArrowRightToBracket} /></Link>
                </div>
                :
                <div className={header.userBtnBox}>
                    <FontAwesomeIcon title='로그아웃' icon={faArrowRightFromBracket}  className={header.signBtn}/>
                    <Link href={'/mypage'} className={header.signBtn}><FontAwesomeIcon title='마이페이지' icon={faUser} /></Link>
                </div>
                }

            </div>
            <div className={header.linkBox}>
                <Link href={'/content'}>콘텐츠</Link>
                <Link href={'/fantube'}>팬채널</Link>
                <Link href={'/board'}>자유게시판</Link>
                <Link href={'/notice'}>공지사항</Link>
                <Link href={'/apply'}>매니저신청</Link>
            </div>
        </header>
    )
    
}