/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'
import { globalPaddingVariants } from '../../styles/GlobalStyles'

export const Header1 = styled.div([
  tw`font-handwritten text-4xl md:text-6xl my-6 bg-primary-600/90 text-neutral-900 leading-6 md:leading-10`,
  { ...globalPaddingVariants.classOffset },
  css`
    width: fit-content;
    position: relative;
    & > * {
      position: relative;
      ${tw`-top-1 md:-top-3`}
    }
  `,
])

export const Subheader1 = styled.div(
  tw`text-xl md:text-3xl uppercase font-sansax tracking-wider font-semibold my-5`,
)

export const Subheader2 = styled.div(
  tw`font-sansax text-lg md:text-xl font-semibold uppercase tracking-wider`,
)

export const Label = styled.div(
  tw`font-sans tracking-wider uppercase font-extralight`,
)
