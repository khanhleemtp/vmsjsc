import { NavLinkConfig } from '@/config'
import 'animate.css'
import clsx from 'clsx'
import { FC } from 'react'
import { InView } from 'react-intersection-observer'
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
    <div className="pt-14 lg:pt-0">
      {Object.entries(PageConfig).map(([key, Component]) => (
        <InView key={key}>
          {({ ref: inViewRef, inView }) => {
            if (inView) {
              console.log('inView', key)
            }
            return (
              <section
                ref={inViewRef}
                key={key}
                id={key}
                className={clsx(
                  key === 'home' ? '' : 'pt-[65px] lg:pt-[105px]'
                )}
              >
                <Component />
              </section>
            )
          }}
        </InView>
      ))}
    </div>
  )
}

export default MainContainer
