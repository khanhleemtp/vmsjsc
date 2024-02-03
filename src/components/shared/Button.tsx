import { css } from '@emotion/react'
import clsx from 'clsx'
import { FC } from 'react'

interface ButtonProps {
  href: string
  text: string
  type?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ href, text, type = 'primary' }) => {
  return (
    <a
      href={href}
      className={clsx(
        'border-primary text-white w-fit',
        type === 'primary' ? 'bg-primary' : 'bg-transparent'
      )}
      css={css`
        font-weight: 700;
        text-transform: uppercase;
        transition: 0.3s ease-out;
        min-width: 200px;
        border-radius: 25px;
        border-width: 2px;
        white-space: nowrap;
        padding: 5px 25px;
        line-height: 26.6px;
        font-size: 14px;
        min-width: 200px;
        display: inline-block;
        text-align: center;
        white-space: nowrap;
      `}
    >
      {text}
    </a>
  )
}

export default Button
