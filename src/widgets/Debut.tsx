'use client'

import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Widget = styled.div`
  display: flex;
  gap: 2px;
  font-size: 14px;
  align-items: flex-end;
  position: relative;
`

const Text = styled.div`
  font-size: 12px;
  font-family: 'S-CoreDream';
  color: #000;
  padding: 1px 2px;
  display: flex;
  height: 100%;
`

const Day = styled.div`
  /* font-family: 'S-CoreDream-9Black'; */
  font-family: 'S-CoreDream';
  font-size: 16px;
  /* padding: 3px 8px; */
  /* background-color: #f1f1f1; */
  /* border-radius: 25px; */
`

const IconBox = styled.div`
  font-size: 8px;
  position: absolute;
  top: -8px;
  right: -8px;
`

export default function Debut() {

  const [debut, setDebut] = useState<number>(0);

  useEffect(() => {
    const date = new Date();
    const diffDate = date.getTime() - new Date(2022, 1, 22, date.getHours(), date.getMinutes()).getTime();
    setDebut(Math.floor(diffDate / (1000 * 60 * 60 * 24)))
  }, [])

  return (
    <Widget>
      <Text>엔믹스와 함께한 지</Text>
      <Day>{debut}일</Day>
      <IconBox>
        <FontAwesomeIcon icon={faStarOfLife} />
      </IconBox>
    </Widget>
  )
}