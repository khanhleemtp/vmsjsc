import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

const NavbarDrawer: FC<
  PropsWithChildren<{
    isOpen: boolean
    handleToggle: () => void
  }>
> = ({ children, isOpen, handleToggle }) => {
  return (
    <div className="top-14 fixed z-40">
      <div
        className={clsx(
          'w-[270px] transition-transform left-0 fixed h-screen z-40 duration-300 top-14 overflow-y-auto bg-[#222]',
          isOpen ? 'transform-none' : '-translate-x-full'
        )}
      >
        {children}
      </div>
      <div
        className={clsx(
          'bg-transparent inset-0 fixed z-30 transform transition-opacity',
          isOpen ? '' : 'hidden'
        )}
        onClick={handleToggle}
      ></div>
    </div>
  )
}

export default NavbarDrawer
