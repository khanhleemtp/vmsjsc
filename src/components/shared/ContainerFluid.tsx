import { FC, PropsWithChildren } from 'react'

const ContainerFluid: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full px-4">{children}</div>
}

export default ContainerFluid
