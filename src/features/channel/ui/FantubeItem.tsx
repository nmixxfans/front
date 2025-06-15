'use client'

import Link from "next/link";
import styled from "styled-components";
import { FantubeType } from "../types/fanchannel";
import Image from "next/image";

const Component = styled.div`
  width: 250px;
  height: 200px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: 'S-CoreDream';
  border-radius: 5px;

  &:hover{
    background-color: #fafafa;
    scale: 1.1;
    transition: all 0.3s;
  }
`

const ChannelLink = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #000;
  text-decoration: none;
  position: relative;
`

const ChannelImage = styled(Image)`
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
`

const ChannelTextBox = styled.div`
  width: 230px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

const ChannelView = styled.span`
  display: none;
  font-size: 13px;
  font-family: 'S-CoreDream';
  position: absolute;
  bottom: 15px;

  ${ChannelLink}:hover & {
    display: block;
  }
`

const ChannelText = styled.span`
  
`

interface ComponentProps {
  value: FantubeType;
}

export default function FantubeItem({ value }: ComponentProps) {

  return (
    <Component>
      <ChannelLink href={value.url} target="_blank">
        <ChannelImage src={value.coverImg} alt="img" width={100} height={100} />
        <ChannelTextBox>
          <ChannelText>{value.name}</ChannelText>
          <ChannelText>&nbsp;·&nbsp;</ChannelText>
          <ChannelText>{value.sub}</ChannelText>
        </ChannelTextBox>
        <ChannelTextBox>
          <ChannelView>{value.view}회</ChannelView>
        </ChannelTextBox>
      </ChannelLink>
    </Component>
  )
}