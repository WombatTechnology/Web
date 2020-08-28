import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Heading, Description, mediaMaxWidth } from "../../style"
import { images } from "../../components/common/images"

interface Props {
  closeModal: () => void
}
const ThankYouModal = ({ closeModal }: Props) => {
  return (
    <Modal>
      <CloseButton onClick={closeModal}>
        <Img
          fixed={[
            images().closePC.childImageSharp.fixed,
            {
              ...images().closeSP.childImageSharp.fixed,
              media: `(max-width: ${mediaMaxWidth})`,
            }
          ]}
        />
      </CloseButton>
      <ModalContent>
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
  width: 100vw;
  height: 100%;
`

const ModalContent = styled.div`
  background-color: white;
  width: 784px;
  height: 600px;
  border-radius: 24px;
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${mediaMaxWidth}) {
    width: calc(100vw - 16px);
  }
`

const CloseButton = styled.div`
  margin-top: 8px;
  position: fixed;
  top: 56px;
  right: 56px;
  cursor: pointer;
  @media (max-width: ${mediaMaxWidth}) {
    top: 16px;
    right: 16px;
  }
`

export default ThankYouModal