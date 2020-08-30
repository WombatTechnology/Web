import { createIntl, createIntlCache } from 'react-intl'
import messages from './messages'

const cache = createIntlCache()
const lang = navigator.language
const intl = createIntl(
  {
    // 言語
    locale: lang,
    // デフォルトの言語
    defaultLocale: 'en',
    // Cache
    messages: messages[lang],
  },
  cache
)

export default intl