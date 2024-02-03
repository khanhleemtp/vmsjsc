import { navLinks } from '@/config'
import { css } from '@emotion/react'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import NavbarButton from './Button'
import NavbarDrawer from './Drawler'
import NavbarLink from './Link'

const NavbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const elRef = useRef<HTMLDivElement>(null)

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
        className={clsx('hidden lg:block absolute inset-0 shadow-lg z-20')}
        ref={elRef}
      >
        <div className="h-20 w-full flex items-center justify-between container mx-auto max-w-2xl">
          <div className="h-full">
            <img src="/vms-logo.png" className="h-full align-middle" />
          </div>
          <ul className="flex items-center">
            {Object.values(navLinks).map((item) => (
              <li key={item.title} className="">
                <a
                  href={'#' + item.path}
                  className="text-[888] text-[14px] font-bold px-4 py-2 hover:text-primary active:text-primary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden items-start shadow-lg fixed left-0 top-0 right-0 p-1 h-14 z-50 bg-white">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-10">
          <img src="/vms-logo.png" className="h-full align-middle" />
        </div>
        <NavbarButton
          isOpen={isOpen}
          handleToggle={() => {
            setIsOpen(!isOpen)
          }}
        />
      </div>
      <NavbarDrawer
        isOpen={isOpen}
        handleToggle={() => {
          setIsOpen(!isOpen)
        }}
      >
        <NavbarLink />
      </NavbarDrawer>
    </>
  )
}

export default NavbarContainer
