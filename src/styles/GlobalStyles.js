import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

export const globalPadding = '7rem'
export const globalPaddingVariants = {
  class: {
    paddingLeft: globalPadding,
    paddingRight: globalPadding,
  },
  classOffset: {
    paddingLeft: globalPadding,
    paddingRight: globalPadding,
    marginLeft: '-' + globalPadding,
    marginRight: '-' + globalPadding,
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
