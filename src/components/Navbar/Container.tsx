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

  return (
    <>
      <div className="flex items-start shadow-lg fixed left-0 top-0 right-0 p-1 h-14 text-[#888] z-50 bg-white">
        <button
          className="relative overflow-hidden flex items-center justify-center w-12 h-12"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <span
            className={clsx(
              'w-6 h-1 absolute transition-all duration-300  bg-[#888]',
              isOpen ? 'top-6 rotate-45 -translate-y-0' : '-translate-y-2'
            )}
          ></span>
          <span
            className={clsx(
              'w-6 h-1 absolute bg-[#888] transition-all duration-300',
              isOpen ? 'top-10 -rotate-45 -translate-y-4' : ''
            )}
          ></span>
          <span
            className={clsx(
              'w-6 h-1 absolute translate-y-2 bg-[#888] transition-all duration-300',
              isOpen ? 'hidden' : 'translate-x-0'
            )}
          ></span>
        </button>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10">
          <img src="/vms-logo.png" className="h-full align-middle" />
        </div>
      </div>
      <Drawer
        isOpen={isOpen}
        handleToggle={() => {
          setIsOpen(!isOpen)
        }}
      >
        <ul className="pb-14">
          {Array.from({ length: 100 }).map((_, i) => (
            <li key={i} className="">
              Item {i}
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  )
}

export default NavbarContainer
