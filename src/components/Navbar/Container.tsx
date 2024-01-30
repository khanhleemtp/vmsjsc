import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { FC, PropsWithChildren, useState } from 'react'

const Drawer: FC<
  PropsWithChildren<{
    isOpen: boolean
    handleToggle: () => void
  }>
> = ({ children, isOpen, handleToggle }) => {
  return (
    <div className="top-14 fixed">
      <div
        className={clsx(
          'w-[270px] transition-transform left-0 h-screen fixed z-40 duration-300 p-4 top-14 overflow-y-auto bg-red-200',
          isOpen ? 'transform-none' : '-translate-x-full'
        )}
      >
        {children}
      </div>
      <div
        className={clsx(
          'bg-transparent fixed inset-0 z-10 transform transition-opacity',
          isOpen ? 'opacity-50' : 'opacity-0'
        )}
        onClick={handleToggle}
      ></div>
    </div>
  )
}

const NavbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const Icon = isOpen ? XMarkIcon : Bars3Icon

  return (
    <>
      <div className="flex shadow-lg fixed left-0 top-0 right-0 p-1 h-14 text-[#888] z-50 bg-white">
        <Icon
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className={clsx(
            'cursor-pointer w-12 h-12 transition-all delay-100 transform rotate-180'
          )}
        />

        <div className="flex justify-center items-center px-4">
          <img src="/vms-logo.png" className="h-full align-middle" />
        </div>
      </div>
      <Drawer
        isOpen={isOpen}
        handleToggle={() => {
          setIsOpen(!isOpen)
        }}
      >
        <ul>
          {Array.from({ length: 100 }).map((_, i) => (
            <li key={i} className="p-2">
              Item {i}
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  )
}

export default NavbarContainer
