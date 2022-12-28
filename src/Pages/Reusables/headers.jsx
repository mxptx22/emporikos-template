/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'
import { globalPaddingVariants } from '../../styles/GlobalStyles'

export const TitleHeader = ({ titleText = 'Subpage' }) => {
  return (
    <div className="mt-36 flex justify-center w-full">
      <div>
        <div className="text-6xl md:text-9xl font-handwritten text-primary-700 text-center w-fit relative">
          {titleText}
          <div className="absolute w-full h-3 md:h-6 bg-neutral-300 bottom-[40%] -z-10"></div>
        </div>
      </div>
    </div>
  )
}

export const Header1 = styled.div([
  tw`font-handwritten text-4xl md:text-6xl my-6 bg-primary-600/90 text-black/80 leading-6 md:leading-10`,
  { ...globalPaddingVariants.classOffset },
  css`
    width: fit-content;
    position: relative;
    & > * {
      position: relative;
      ${tw`-top-0.5 md:-top-1`}
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

export const ALink = styled.a([
  tw`uppercase text-neutral-900 font-semibold tracking-wide transition-all duration-200 cursor-pointer h-min`,
  tw`hover:(border-b border-current)`,
])
