'use client'

import { ReactNode } from "react";
import styled from "styled-components";

const Component = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  padding-bottom: 2px;
  user-select: none;
  font-weight: 600;
  display: flex;
  gap: 5px;
  align-items: center;
`

interface ComponentProps {
  children: ReactNode;
}

export function Title({ children }: ComponentProps) {
  return (
    <Component>
      {children}
    </Component>
  )
}