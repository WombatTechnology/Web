import React, { useState, useRef } from "react"
import styled from "@emotion/styled"

const Playground = () => {
  return (
    <Container>
      <A></A>
      <Spacer />
      <B></B>
    </Container>
  )
}

const Container = styled.div`
  height: 600px;
  width: 200px;
  background-color: green;
  display: flex;
  flex-direction: column;
`

const A = styled.div`
  height: 100px;
  width: 100%;
  background-color: red;
`

const B = styled.div`
  height: 100px;
  width: 100%;
  background-color: blue;
`

const Spacer = styled.div`
  flex-grow: 1;
  background-color: yellow;
`
export default Playground