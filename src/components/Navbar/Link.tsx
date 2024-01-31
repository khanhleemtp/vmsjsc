import { navLinks } from '@/config'
import { css } from '@emotion/react'

const NavbarLink = () => {
  return (
    <div>
      <ul
        css={css`
          overflow: auto;
          font-size: 16px;
          line-height: 26px;
        `}
      >
        {navLinks.map((item) => (
          <li
            key={item.path}
            css={css`
              color: #888;
              width: '100%';
              &:hover a {
                color: #fff;
                background-color: #5dd39e;
              }
              &.active a {
                color: #fff;
                background-color: #5dd39e;
              }
            `}
          >
            <a
              css={css`
                color: #888;
                width: '100%';
                display: block;
                padding: 11px 56px 11px 16px;
              `}
              href={'#' + item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavbarLink
