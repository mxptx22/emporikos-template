/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'

export const ButtonPrimary = styled.a([
  tw`flex justify-center items-center gap-1 w-fit text-2xl cursor-pointer relative uppercase tracking-wider font-light px-3 py-2`,
  ,
  css`
    &:before {
      position: absolute;
      content: '';
      transition: all 0.8s;
      ${tw`w-full h-full border border-current z-0`}
    }

    &:hover:before {
      transition: all 0.8s;
      ${tw`bg-current scale-110`}
    }

    &:hover > * {
      ${tw`text-white z-10`}
    }
  `,
])

export const ButtonSocial = tw(ButtonPrimary)`aspect-square`
