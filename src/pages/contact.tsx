import React from "react"
import { ContactForm } from '@kazuwombat/fire-form'
import config from '../firebaseConfig'

const ContactPage = () => {
  return (
<ContactForm
  config={config}
  setting={{
    formStyle: {
      backgroundColor: "green"
    }
  }}
  successCallback={() => {
    alert("success :)") /* TODO Handle Success */
  }}
  errorCallback={(error) => {
    alert(error) /* TODO Handle Error */
  }}
/>
  )
}
export default ContactPage