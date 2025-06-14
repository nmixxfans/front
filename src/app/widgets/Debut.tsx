'use client'

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Widget = styled.div`
  display: flex;
  gap: 2px;
  font-size: 14px;
  display: flex;
  align-items: flex-end;
`

const Text = styled.div`
  font-size: 12px;
  font-family: 'S-CoreDream';
  color: #000;
  padding: 1px 2px;
  display: flex;
  align-items: flex-end;
`

const Day = styled.div`
  font-family: 'S-CoreDream-9Black';
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
      <Text>데뷔일로부터</Text>
      <Day>{debut}일</Day>
    </Widget>
  )
}