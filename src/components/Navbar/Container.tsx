import { navLinks } from '@/config'
import { css } from '@emotion/react'
import clsx from 'clsx'
import NavLinkMobile from './Navlink'

const NavbarContainer = () => {
  return (
    <>
      <div
        css={css`
          transition: all 0.3s ease-in-out;
          &.is-pinned {
            position: sticky;
            background-color: white;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
            z-index: 50;
            top: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: white;
          }
        `}
        className={clsx(
          'hidden lg:block absolute inset-0 shadow-lg z-20 is-pinned'
        )}
      >
        <div className="h-[72px] w-full flex items-center justify-between container mx-auto max-w-2xl">
          <div className="h-1/2">
            <img src="/vms-logo.png" className="h-full align-middle" />
          </div>
          <ul className="flex items-center">
            {Object.values(navLinks).map((item) => (
              <li key={item.path} className="uppercase">
                <a
                  href={'#' + item.path}
                  className="text-[888] text-[14px] font-bold px-4 py-2 hover:text-primary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <NavLinkMobile />
    </>
  )
}

export default NavbarContainer
