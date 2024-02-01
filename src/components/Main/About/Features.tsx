import { ReactComponent as ServiceOne } from '@/assets/service-1.svg'
import { ReactComponent as ServiceTwo } from '@/assets/service-2.svg'
import { ReactComponent as ServiceThree } from '@/assets/service-3.svg'

import ContainerFluid from '@/components/shared/ContainerFluid'
import { css } from '@emotion/react'

interface FeatureSvgProps {
  title: string
  description: string
  component: React.FC<React.SVGProps<SVGSVGElement>>
}

const listFeturesSvg: FeatureSvgProps[] = [
  {
    title: 'Quality',
    description: 'We provide the best quality products for you',
    component: ServiceOne
  },
  {
    title: 'Fast Delivery',
    description: 'We provide the best quality products for you',
    component: ServiceTwo
  },
  {
    title: 'Support',
    description: 'We provide the best quality products for you',
    component: ServiceThree
  }
]

// https://undraw.co/illustrations

const Features = () => {
  return (
    <div className="container mt-[60px] mx-auto max-w-6xl">
      <ContainerFluid>
        <h3 className="overflow-hidden text-center uppercase font-title text-[28px] leading-[42px] font-normal animate__animated animate__fadeInLeft animation-delay-600 ease-in-out">
          <span className="inline-block text-primary">advantages &nbsp; </span>
          <span className="inline-block">you get from</span>
          <span className="inline-block">you get from</span>
          <br />
          <span className="inline-block">ordering at vmsjsc</span>
        </h3>
        <div
          className="space-y-[60px] mt-[65px]"
          css={css`
            @keyframes fadeInLeftSm {
              0% {
                opacity: 0;
                transform: translateX(-150px) scale(0.8);
              }
              70% {
                transform: translateX(10px) scale(1.02);
              }
              100% {
                opacity: 1;
                transform: translateX(0) scale(1);
              }
            }
          `}
        >
          {listFeturesSvg.map((item, index) => (
            <div
              key={index}
              css={css`
                animation: fadeInLeftSm 1s ease-in-out;
                animation-delay: 600ms;
              `}
              className="flex flex-col items-center space-y-[15px]"
            >
              <div className="h-[60px] w-full flex items-center justify-center">
                <item.component className="h-full w-auto" />
              </div>
              <h4 className="text-[17px] uppercase leading-[25.5px] font-title text-heading text-center">
                {item.title}
              </h4>
              <p className="text-[12px] leading-[18px] font-[300] text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </ContainerFluid>
    </div>
  )
}

export default Features
