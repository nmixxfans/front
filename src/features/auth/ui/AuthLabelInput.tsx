'use client'

import { ChangeEvent, forwardRef, MouseEvent } from "react";
import styled from "styled-components"

const Component = styled.div`
  position: relative;
`

const SignupInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #cfcfcf;
  padding: 10px;
  outline: none;
  border-radius: 5px;

  &:focus{
    border: 1px solid #000;
  }
`

const SignupLabel = styled.label`
  font-size: 14px;
  padding: 2px;
  padding-bottom: 0px;
  display: block;
  background-color: #fff;
  position: absolute;
  top: -12px;
  left: 6px;

  ${SignupInput}:focus + & {
    font-weight: 600;
  }
`

const SignupEmailBox = styled.div`
  display: flex;
  gap: 15px;
`

const SignupVerifyButton = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f1f1f1;
  background-color: #000;
  color: white;
  cursor: pointer;
  font-size: 12px;
  border-radius: 5px;
`

interface ComponentProps {
  id: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // ref?: React.Ref<HTMLInputElement>;
  type?: "text" | "password"
  isEmail?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  verify?: string;
}

export const AuthLabelInput = forwardRef<HTMLInputElement, ComponentProps>(
  ({ isEmail, verify, value, type, label, id, onChange, onClick }, ref) => {
  return (
    <Component>
      {isEmail ?
        <>
          <SignupEmailBox>
            <SignupInput
              value={value}
              onChange={onChange}
              ref={ref}
              type={type}
              id={id}
            />
            <SignupLabel htmlFor={id}>{label}</SignupLabel>
            <SignupVerifyButton onClick={onClick}>{verify}</SignupVerifyButton>
          </SignupEmailBox>
        </>
        :
        <>
          <SignupInput
            value={value}
            onChange={onChange}
            ref={ref}
            type={type}
            id={id}
          />
          <SignupLabel htmlFor={id}>{label}</SignupLabel>
        </>
      }

    </Component>
  )
})