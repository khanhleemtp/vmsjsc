import { NavLinkConfig } from '@/config'
import 'animate.css'
import { FC } from 'react'
import AboutContainer from './About/Container'
import ContactsContainer from './Contacts/Container'
import HomeContainer from './Home/Container'
import ProductsContainer from './Products/Container'

const PageConfig: Record<NavLinkConfig, FC> = {
  [NavLinkConfig.HOME]: HomeContainer,
  [NavLinkConfig.ABOUT]: AboutContainer,
  [NavLinkConfig.PRODUCTS]: ProductsContainer,
  [NavLinkConfig.CONTACTS]: ContactsContainer
}

const MainContainer = () => {
  return (
    <div className="pt-14 lg:pt-0 container mx-auto min-h-[calc(100vh-14rem)] space-y-[60px]">
      {Object.entries(PageConfig).map(([key, Component]) => (
        <section key={key} id={key}>
          <Component />
        </section>
      ))}
    </div>
  )
}

export default MainContainer
