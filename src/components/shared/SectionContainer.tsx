import { FC, PropsWithChildren } from 'react'

const SectionContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container w-full mx-auto">{children}</div>
}

export default SectionContainer
