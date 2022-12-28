import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

export const globalPaddingXS = theme('spacing.2')
export const globalPaddingSM = theme('spacing.14')
export const globalPadding = theme('spacing.28')

export const globalPaddingVariants = {
  class: {
    paddingLeft: globalPaddingXS,
    paddingRight: globalPaddingXS,
    [`@media(min-width: ${theme('screens.sm')})`]: {
      paddingLeft: globalPaddingSM,
      paddingRight: globalPaddingSM,
    },
    [`@media(min-width: ${theme('screens.lg')})`]: {
      paddingLeft: globalPadding,
      paddingRight: globalPadding,
    },
  },
  classOffset: {
    paddingLeft: globalPaddingXS,
    paddingRight: globalPaddingXS,
    marginLeft: '-' + globalPaddingXS,
    marginRight: '-' + globalPaddingXS,
    [`@media(min-width: ${theme('screens.sm')})`]: {
      paddingLeft: globalPaddingSM,
      paddingRight: globalPaddingSM,
      marginLeft: '-' + globalPaddingSM,
      marginRight: '-' + globalPaddingSM,
    },
    [`@media(min-width: ${theme('screens.lg')})`]: {
      paddingLeft: globalPadding,
      paddingRight: globalPadding,
      marginLeft: '-' + globalPadding,
      marginRight: '-' + globalPadding,
    },
  },
  classCover: {
    marginLeft: '-' + globalPaddingXS,
    marginRight: '-' + globalPaddingXS,
    [`@media(min-width: ${theme('screens.sm')})`]: {
      marginLeft: '-' + globalPaddingSM,
      marginRight: '-' + globalPaddingSM,
    },
    [`@media(min-width: ${theme('screens.lg')})`]: {
      marginLeft: '-' + globalPadding,
      marginRight: '-' + globalPadding,
    },
  },
}

const customStyles = css({
  body: [
    tw`text-base md:text-xl bg-neutral-100`,
    {
      color: theme('colors.neutral.900'),
    },
  ],
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
