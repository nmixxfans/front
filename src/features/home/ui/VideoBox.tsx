'use client'

import { Title } from "@/shared/ui/Title";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const YTVideoBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const YTVideoItem = styled.div`
  display: flex;
  flex-direction: column;
`

const YTVideo = styled.iframe`
  width: 490px;
  height: 275px;
  border-radius: 10px;
  transition: all 0.3s;
`

const OnAir = styled.div`
  border: 2px solid red;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: sparkle 3s infinite;
`

const OnAirContent = styled.div`
  border-radius: 50%;
  width: 6px;
  height: 6px;
  background-color: red;
  animation: sparkle 3s infinite ease-in-out;

  @keyframes sparkle {
    0%{
      opacity: 0.2;
    }
    35%{
      opacity: 1;
    }
    65%{
      opacity: 1;
    }
    100%{
      opacity: 0.2;
    }
}
`
interface BoxProps {
  recent: string;
  recentLive: string;
}

export function VideoBox({ recent, recentLive }: BoxProps) {
  return (
    <Box>
      <YTVideoBox>
        <YTVideoItem>
          <Title>
            <FontAwesomeIcon icon={faPlay} />
            NMIXX NEW
          </Title>
          <YTVideo src={`https://www.youtube.com/embed/${recent}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </YTVideoItem>
        <YTVideoItem>
          <Title>
            <FontAwesomeIcon icon={faPlay} />
            NMIXX ON AIR
            <OnAir><OnAirContent /></OnAir>
          </Title>
          <YTVideo src={`https://www.youtube.com/embed/${recentLive}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </YTVideoItem>
      </YTVideoBox>
    </Box>
  )
}