import { createElement } from 'react'
import { IntlProvider } from 'react-intl'
import { intlConfig } from '@bit/lucis.alt.intl-config'

export default ({ element }: { element: React.ElementType }) => {
  return createElement(IntlProvider, {
    locale: intlConfig.locale,
    defaultLocale: intlConfig.locale,
    messages: intlConfig.messages,
    children: element,
  })
}
