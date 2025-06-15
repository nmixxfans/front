'use client'

import Link from 'next/link'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import Debut from './Debut';
import { userState } from '@/shared/lib/Atom';

const Widget = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid black;
  margin-bottom: 50px;
  position: relative;
`

const IconBox = styled.div`
  width: 1000px;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 30px;
  font-weight: 900;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`

const LogoImg = styled(Image)`
  width: 140px;
  height: 55px;
`

const UserBox = styled.div`
  position: absolute;
  display: flex;
  right: 0px;
  top: 15px;
`

const UserLink = styled(Link)`
  color: rgb(0, 0, 0);
  font-size: 14px;
  cursor: pointer;
  margin-left: 8px;
  text-decoration: none;
  padding: 4px 6px;
  border: 1px solid rgb(0, 0, 0);
`

const UserDisableLink = styled.div`
  color: rgb(0, 0, 0);
  font-size: 13px;
  cursor: pointer;
  margin-left: 8px;
  text-decoration: none;
  padding: 4px 6px;
  border: 1px solid rgb(0, 0, 0);
`

const PageBox = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #000;
  padding-top: 5px;
`

const PageLink = styled(Link)`
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
  color: #000;
  padding: 5px 9px;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: #000;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    border-radius: 3px;
  }

  &:hover {
    color: #fff;
  }

  &:hover::after {
    width: 100%;
    opacity: 1;
  }
`

export default function Header() {

  const [sign, setSign] = useRecoilState(userState);

  useEffect(() => {
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
    if (data.result) {
      window.location.href = '/signin'
    }
  }

  return (
    <Widget>
      <IconBox>
        <LogoBox>
          <LogoLink href={'/'}>
            <LogoImg width={570} height={222} src='/wenmixx_logo.png' alt='logo' />
          </LogoLink>
          <Debut />
        </LogoBox>
        <UserBox>
          {sign.id === 0 ?
            <UserLink href={'/signin'} title='로그인'>로그인</UserLink>
            :
            <>
              <UserLink href={'/mypage'}><FontAwesomeIcon icon={faUser} /></UserLink>
              <UserDisableLink title='로그아웃' onClick={handleLogout}>로그아웃</UserDisableLink>
            </>
          }
        </UserBox>
      </IconBox>
      <PageBox>
        {/* <PageLink href={'/content'}>콘텐츠</PageLink> */}
        <PageLink href={'/fantube'}>팬채널</PageLink>
        <PageLink href={'/board'}>자유게시판</PageLink>
        <PageLink href={'/notice'}>공지사항</PageLink>
        {/* <PageLink href={'/mc'}>엔믹스콘</PageLink> */}
        {/* <PageLink href={'/apply'}>매니저신청</PageLink> */}
        {/* <PageLink href={'/send'}>건의</PageLink> */}
      </PageBox>
    </Widget>
  )

}