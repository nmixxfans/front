'use client'

import { korTime } from "@/app/asset/functions/utc-to-kor";
import { ItemProps } from "@/shared/types/board";
import { Title } from "@/shared/ui/Title";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";

const Box = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

const ItemContent = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: #fff;
  border: 1px solid var(--bs-border);
  border-radius: 5px;
  padding: 10px;
  transition: all 0.3s;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  /* 
  .boxScroll::-webkit-scrollbar {
    width: 10px;
  }

  .boxScroll::-webkit-scrollbar-thumb{
      background: #dbdbdb;
      border-radius: 10px;
  }

  .boxScroll::-webkit-scrollbar-track {
      background: rgba(129, 129, 129, 0.1);
      border-radius: 10px;
  } */
`

const Item = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  border-bottom: 1px solid var(--bs-border);
  cursor: pointer;
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: #f2f2f2;
  }
`

const ItemTitle = styled.div`
  font-size: 14px;
  cursor: pointer;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${Item}:hover & {
    text-decoration: underline;
  }
`

const ItemDate = styled.div`
  color: #b5b5b5;
  font-size: 12px;
  width: 20%;
  display: flex;
  justify-content: flex-end;
`

interface BoxProps {
  data: ItemProps[];
  title: string;
  icon: IconProp;
  url: string;
}

export function BoardBox({ data, title, icon, url }: BoxProps) {
  return (
    <Box>
      <TitleLink href={url}>
        <Title>
          <FontAwesomeIcon icon={icon} />
          {title}
        </Title>
      </TitleLink>
      <ItemContent>
        {
          data
            ?
            data.map((value, index) => {
              return (
                <Item href={`/notice/${value.id}`} key={index}>
                  <ItemTitle>
                    {value.title}
                  </ItemTitle>
                  <ItemDate>
                    {korTime(new Date(value.date))}
                  </ItemDate>
                </Item>
              )
            })
            :
            <></>
        }
      </ItemContent>
    </Box>
  )
}