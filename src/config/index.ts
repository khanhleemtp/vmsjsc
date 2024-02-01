import { NavLink } from '@/types'

export enum NavLinkConfig {
  HOME = 'home',
  ABOUT = 'about',
  PRODUCTS = 'products',
  CONTACTS = 'contacts'
}

export const navLinks: NavLink[] = [
  {
    title: 'Home',
    path: NavLinkConfig.HOME
  },
  {
    title: 'About',
    path: NavLinkConfig.ABOUT
  },
  {
    title: 'Products',
    path: NavLinkConfig.PRODUCTS
  },
  {
    title: 'Contacts',
    path: NavLinkConfig.CONTACTS
  }
]
