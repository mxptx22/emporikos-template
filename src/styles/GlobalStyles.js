import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

export const globalPaddingMini = theme('spacing.2')
export const globalPadding = theme('spacing.28')

export const globalPaddingVariants = {
  class: {
    paddingLeft: globalPaddingMini,
    paddingRight: globalPaddingMini,
    [`@media(min-width: ${theme('screens.md')})`]: {
      paddingLeft: globalPadding,
      paddingRight: globalPadding,
    },
  },
  classOffset: {
    paddingLeft: globalPaddingMini,
    paddingRight: globalPaddingMini,
    marginLeft: '-' + globalPaddingMini,
    marginRight: '-' + globalPaddingMini,
    [`@media(min-width: ${theme('screens.md')})`]: {
      paddingLeft: globalPadding,
      paddingRight: globalPadding,
      marginLeft: '-' + globalPadding,
      marginRight: '-' + globalPadding,
    },
  },
  classCover: {
    marginLeft: '-' + globalPaddingMini,
    marginRight: '-' + globalPaddingMini,
    [`@media(min-width: ${theme('screens.md')})`]: {
      marginLeft: '-' + globalPadding,
      marginRight: '-' + globalPadding,
    },
  },
}

const customStyles = css({
  body: {
    color: theme('colors.neutral.900'),
  },
  input: [
    tw`my-0 text-xl bg-transparent border-solid border border-current rounded-none w-full p-2 uppercase font-thin tracking-wide`,
  ],
  textarea: [
    tw`my-0! text-xl bg-transparent border-solid border border-current rounded-[0%] resize-none w-full! p-2 uppercase font-thin tracking-wide`,
  ],
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
