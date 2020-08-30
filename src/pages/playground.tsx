import React, { useState, useRef } from "react"
// Locale data
import { IntlProvider, FormattedMessage, FormattedNumber, addLocaleData } from 'react-intl'

const en = {
  hello: "hello",
}

const jp = {
  hello: "こんにちは"
}

const messages = { en, jp }

const Playground = () => {
  console.log(messages)
  return (
    <IntlProvider messages={messages["jp"]} locale="jp" defaultLocale="en">
      <p>
        <FormattedMessage
          id="hello"
        />
      </p>
    </IntlProvider>
  )
}
export default Playground