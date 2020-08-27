import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, Spacer } from "../../style"
import Section from './section'
import { ContactForm } from '@kazuwombat/fire-form'
import config from '../../firebaseConfig'
import ThankYouModal from "./thankyouModal"
import FocusLock from "react-focus-lock"

const Contact = () => {
  const [showThankYou, setThankYou] = useState(false);
  return (
    <Section id="contact" title="Contact" titleSupplement="お問い合わせ">
      <Description>
        開発のご相談など以下よりお気軽にお問い合わせください。
      </Description>
      <ContactForm
        config={config}
        setting={{
          namePlaceHolder: "お名前",
          companyNamePlaceHolder: "会社名",
          emailPlaceHolder: "メールアドレス",
          contentPlaceHolder: "お問い合わせ内容",
          submitButtonLabel: "送信"
        }}
        successCallback={() => { setThankYou(true) }}
        errorCallback={(error) => { alert(error) /* TODO Handle Error */ }}
      />
      {
        showThankYou && <ThankYouModal closeModal={() => setThankYou(false)} />
      }
    </Section>
  )
}

const FormContainer = styled.section`
  width: 100%;
  margin: 28px auto;
  border-radius: 16px;
  max-width: 600px;
}
`

export default Contact