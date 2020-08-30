import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Heading, mediaMaxWidth } from "../../style"
import { images } from "../../components/common/images"
import { Description } from "../common/text"

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
        <Description id="pages.index.contact.modal.thanksMessage" style={{ textAlign: "center", marginTop: "12px", padding: "0 12px" }} />
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