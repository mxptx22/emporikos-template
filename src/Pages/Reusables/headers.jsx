/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'
import { globalPadding, globalPaddingVariants } from '../../styles/GlobalStyles'

export const Header1 = styled.div([
  tw`font-handwritten text-6xl my-6 bg-primary-600/90 text-neutral-900 leading-10`,
  { ...globalPaddingVariants.classOffset },
  css`
    width: fit-content;
    position: relative;
    & * {
      position: relative;
      top: -0.15rem;
    }
  `,
])

export const Subheader1 = styled.div(
  tw`text-4xl font-sansax tracking-wide font-semibold my-5`,
)

export const Label = styled.div(
  tw`font-sans tracking-wider uppercase font-extralight`,
)
