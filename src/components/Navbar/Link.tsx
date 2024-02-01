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
          <li key={item.path}>
            <a
              className="block text-body active:bg-primary hover:text-white hover:bg-primary"
              css={css`
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
