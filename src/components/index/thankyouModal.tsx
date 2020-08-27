import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Heading, Description } from "../../style"
import { images } from "../../components/common/images"

interface Props {
  closeModal: () => void
}
const ThankYouModal = ({ closeModal }: Props) => {
  return (
    <Modal>
      <ModalContent>
        <div onClick={closeModal}>
          <Img style={{ position: "fixed", top: "56px", right: "56px", cursor: "pointer" }} fixed={images().close.childImageSharp.fixed} />
        </div>
        <Heading>Thank you!</Heading>
        <Img style={{ marginTop: "24px" }} fixed={images().thankyou.childImageSharp.fixed} />
        <Description style={{ textAlign: "center", marginTop: "12px" }}>お問い合わせありがとうございます。<br />1営業日以内にメールでご連絡いたします。</Description>
      </ModalContent>
    </Modal>
  )
}

const Modal = styled.div`
  background-color: #000000c7;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const ModalContent = styled.div`
  background-color: white;
  width: 784px;
  height: 546px;
  border-radius: 24px;
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default ThankYouModal