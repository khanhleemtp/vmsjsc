import { CSSObject, css } from '@emotion/react'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const baseStyle: CSSObject = {
  transition: 'all .3s ease',
  height: '4px',
  width: '24px',
  backgroundColor: '#888'
}

const baseSpanPseudo: CSSObject = {
  ...baseStyle,
  position: 'absolute',
  content: "''",
  borderRadius: '2px',
  transition: 'all .3s ease',
  transformOrigin: '1.71429px center',
  left: 0
}

const baseSpanPseudoActive: CSSObject = {
  top: 0,
  width: '15px'
}

const buttonCss = {
  base: css({
    ...baseStyle,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '2px'
  }),
  before: css({
    '&:before': {
      position: 'absolute',
      top: '-8px',
      ...baseSpanPseudo
    },
    '&.active:before': {
      transform: 'rotate3d(0, 0, 1, -40deg)',
      ...baseSpanPseudoActive
    }
  }),
  after: css({
    '&:after': {
      top: '8px',
      ...baseSpanPseudo
    },
    '&.active:after': {
      transform: 'rotate3d(0, 0, 1, 40deg)',
      ...baseSpanPseudoActive
    }
  })
}

export interface NavbarButtonProps {
  isOpen: boolean
  handleToggle: () => void
}

const NavbarButton: FC<NavbarButtonProps> = ({ handleToggle, isOpen }) => {
  return (
    <button
      onClick={handleToggle}
      className="w-12 h-12 flex items-center justify-center leading-[48px]"
    >
      <span
        className={twMerge(
          isOpen ? 'rotate-360' : 'rotate-180',
          isOpen ? 'active' : ''
        )}
        css={[buttonCss.base, buttonCss.before, buttonCss.after]}
      ></span>
    </button>
  )
}

export default NavbarButton
