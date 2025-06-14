import Link from "next/link"
import styled from "styled-components"

const Button = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 3px 6px;
  border: 1px solid #000;
  font-size: 14px;
`

interface ButtonProps {
  url: string;
}

export function BoardWriteButton({ url }: ButtonProps) {
  return (
    <Button href={url}>글쓰기</Button>
  )
}