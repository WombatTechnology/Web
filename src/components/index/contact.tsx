import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, Spacer } from "../../style"
import Section from './section'
import { ContactForm } from '@kazuwombat/fire-form'
import config from '../../firebaseConfig'
import ThankYouModal from "./thankyouModal"

interface Props {
  contact: {
    subtitle: string
    description: string
    form: {
      [key: string]: string
    }
  }
}
const Contact = ({ contact: { subtitle, description, form } }: Props) => {
  const [showThankYou, setThankYou] = useState(false);
  return (
    <Section style={{ marginBottom: "0" }} id="contact" title="Contact" titleSupplement={subtitle}>
      <Description>
        {description}
      </Description>
      <ContactForm
        config={config}
        setting={{
          containerStyle: { padding: "0" },
          namePlaceHolder: form.personName,
          companyNamePlaceHolder: form.companyName,
          emailPlaceHolder: form.email,
          contentPlaceHolder: form.inquiryContent,
          submitButtonLabel: form.submit,
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

export default Contact