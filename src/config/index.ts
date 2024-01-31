import { NavLink } from '@/types'

export enum NavLinkConfig {
  HOME = 'home',
  ABOUT = 'about',
  PRODUCTS = 'products',
  TESTIMONIALS = 'testimonials',
  NEWS = 'news',
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
    title: 'Testimonials',
    path: NavLinkConfig.TESTIMONIALS
  },
  {
    title: 'News',
    path: NavLinkConfig.NEWS
  },
  {
    title: 'Contacts',
    path: NavLinkConfig.CONTACTS
  }
]
