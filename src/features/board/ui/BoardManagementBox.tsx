import styled from "styled-components"
import { BoardCategory, BoardWriteButton, category } from '@/features/board';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const PageTitle = styled.div`
  font-size: 18px;
  color: #fff;
  background-color: #000;
  padding: 2px 5px;
  font-family: 'S-CoreDream-9Black';
  line-height: 1.5;
`

const CategoryBox = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`

const RightBox = styled.div`
  display: flex;
  align-items: flex-end;
`

interface BoxProps {
  title: string;
  url: string;
}

export function BoardManagementBox({ title, url }: BoxProps) {
  return (
    <Box>
      <LeftBox>
        <PageTitle>{title}</PageTitle>
        <CategoryBox>
          <BoardCategory id="all" name="category" category="전체" checked={true} />
          {title === '자유게시판' ?
            category.map((value, index) => {
              return (
                <BoardCategory key={index} id={value.id} name="category" category={value.name} />
              )
            })
            :
            <></>
          }
        </CategoryBox>
      </LeftBox>
      <RightBox>
        <BoardWriteButton url={url} />
      </RightBox>
    </Box>
  )
}