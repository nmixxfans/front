import Link from "next/link";
import { korTime } from "@/app/asset/functions/utc-to-kor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faStar,
  faCamera,
  faVideo,
  faPenToSquare,
  faClipboard,
  faFlag,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons"; //포토, 영상, 설문, 일반, 공지
import { boardType } from "../types/table";
import styled from "styled-components";

const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid black;
`

const BoardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #000;
`

const BoardContentLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

interface ComponentProps {
  value: boardType,
  index: number,
  fix: boolean,
}

export function BoardContentItem({ value, index, fix }: ComponentProps) {
  return (
    <Component key={index}>
      <BoardContent style={{ width: '7%' }}>{value.id}</BoardContent>
      <BoardContent style={{ width: '7%', color:'#b6b6b6' }}>{value.category}</BoardContent>
      <BoardContent style={{ width: '5%' }}>
        {
          fix ?
            <FontAwesomeIcon icon={faBell} />
            :
            value.like >= 10 ?
              <FontAwesomeIcon icon={faStar} />
              :
              value.content.indexOf("<img") != -1 ?
                <FontAwesomeIcon icon={faCamera} />
                :
                <FontAwesomeIcon icon={faClipboard} />
        }
      </BoardContent>
      <BoardContent style={{ width: '55%', display:'flex', justifyContent:'flex-start' }}>
        <BoardContentLink href={`/board/${value.id}`}>
          {value.title.length > 16 ? value.title.substring(0, 16) + "..." : value.title}
        </BoardContentLink>
      </BoardContent>
      <BoardContent style={{ width: '13%' }}>{value.user_id.profile.length > 8 ? value.user_id.profile.substring(0, 8) + "..." : value.user_id.profile}</BoardContent>
      <BoardContent style={{ width: '8%' }}>{korTime(new Date(value.date))}</BoardContent>
      <BoardContent style={{ width: '7%' }}>{value.view}</BoardContent>
      <BoardContent style={{ width: '7%' }}>{value.like}</BoardContent>
    </Component>
  )
}