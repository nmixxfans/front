'use client'

import { ReactNode } from "react";
import styled from "styled-components";

const Component = styled.div`
  font-size: 18px;
  color: #fff;
  background-color: #000;
  padding: 2px 5px;
  font-family: 'S-CoreDream-9Black';
  line-height: 1.5;
`

interface ComponentProps {
  children: ReactNode;
}

export function PageTitle({ children }: ComponentProps) {
  return (
    <Component>
      {children}
    </Component>
  )
}