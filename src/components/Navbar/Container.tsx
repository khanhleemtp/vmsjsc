import { useState } from 'react'
import NavbarButton from './Button'
import NavbarDrawer from './Drawler'
import NavbarLink from './Link'

const NavbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex items-start shadow-lg fixed left-0 top-0 right-0 p-1 h-14 text-[#888] z-50 bg-white">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10">
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
