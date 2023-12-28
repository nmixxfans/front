import Link from 'next/link'
import header from '../css/header.module.css'

export default function Header(){
    return(
        <header className={header.header}>
            <div className={header.headerContainer}>
                <div className={header.siteLogoBox}>
                    <Link href={'/'} className={header.siteLogo}>WE-NMIXX</Link>
                </div>
                <div className={header.linkBox}>
                    <Link href={'/content'}>콘텐츠</Link>
                    <Link href={'/fantube'}>팬채널</Link>
                    <Link href={'/board'}>자유게시판</Link>
                    <Link href={'/notice'}>공지사항</Link>
                    <Link href={'/apply'}>매니저신청</Link>
                </div>
            </div>
        </header>
    )
    
}