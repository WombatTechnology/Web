import React, { CSSProperties } from "react"
import styled from "@emotion/styled"
import { Text_14px } from "../../style"

interface Props {
  label: string,
  onClick: () => void,
  upperLabel?: string,
  style: CSSProperties
}

const PrimaryButton = ({ label, onClick, upperLabel, style }: Props) => {
  return (
    <Container onClick={onClick} style={style}>
      <UpperLabel>
        <Text_14px>
          {upperLabel}▼
        </Text_14px>
      </UpperLabel>
      <Button>
        <Label>{label}</Label>
      </Button>
    </Container>
  )
}

const Container = styled.div`
  display: inline-block;
`
const Button = styled.div`
  width: 270px;
  height: 54px;
  background-color: #09770E;
  border-radius: 48px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`

const Label = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: white;
`
const UpperLabel = styled.div`
  padding-left: 12px;
`

export default PrimaryButton
