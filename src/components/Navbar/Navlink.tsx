import { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import NavbarButton from './Button'
import NavbarDrawer from './Drawler'
import NavbarLink from './Link'

const NavLinkMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const matches = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    return () => {
      if (matches) {
        setIsOpen(false)
      }
    }
  }, [matches])

  return (
    <>
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
        <NavbarDrawer
          isOpen={isOpen}
          handleToggle={() => {
            setIsOpen(!isOpen)
          }}
        >
          <NavbarLink />
        </NavbarDrawer>
      </div>
    </>
  )
}

export default NavLinkMobile
