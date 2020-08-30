import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, SubTitle, SmallDescription, Spacer } from "../../style"
import Section from './section'
import { ContactForm } from '@kazuwombat/fire-form'
import config from '../../firebaseConfig'
import ThankYouModal from "./thankyouModal"
import FocusLock from "react-focus-lock"
import { Description } from "../common/text"
import { intl } from "../../i18n"

const Contact = () => {
  const [showThankYou, setThankYou] = useState(false);

  const formKeyFormat = (key: string) => {
    return intl.formatMessage({ id: `pages.index.contact.form.${key}` })
  }

  return (
    <Section style={{ marginBottom: "0" }} id="contact" title="Contact">
      <Description id="pages.index.contact.description" />
      <ContactForm
        config={config}
        setting={{
          containerStyle: { padding: "0" },
          namePlaceHolder: formKeyFormat("personName"),
          companyNamePlaceHolder: formKeyFormat("companyName"),
          emailPlaceHolder: formKeyFormat("email"),
          contentPlaceHolder: formKeyFormat("inquiryContent"),
          submitButtonLabel: formKeyFormat("submit"),
        }}
        successCallback={() => { setThankYou(true) }}
        errorCallback={(error) => { alert(error) /* TODO Handle Error */ }}
      />
      {
        true && <ThankYouModal closeModal={() => setThankYou(false)} />
      }
    </Section>
  )
}

export default Contact