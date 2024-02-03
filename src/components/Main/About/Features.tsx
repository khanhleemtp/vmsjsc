import { ReactComponent as ServiceOne } from '@/assets/service-1.svg'
import { ReactComponent as ServiceTwo } from '@/assets/service-2.svg'
import { ReactComponent as ServiceThree } from '@/assets/service-3.svg'
import Button from '@/components/shared/Button'

import ContainerFluid from '@/components/shared/ContainerFluid'
import { AnimateType } from '@/types'
import { css } from '@emotion/react'
import { FC } from 'react'
import { useInView } from 'react-intersection-observer'

const link =
  'https://livedemo00.template-help.com/wt_prod-12465/images/parallax-04.jpg'

interface FeatureSvgProps {
  title: string
  description: string
  component: React.FC<React.SVGProps<SVGSVGElement>>
  animate: AnimateType
  delay: number
}

const FeatureItem: FC<FeatureSvgProps> = ({
  title,
  description,
  component: Image,
  animate,
  delay
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const animateDelay = `${delay}ms`
  const animateDuration = inView ? '0.6s' : '1s'

  return (
    <div
      ref={ref}
      css={css`
        opacity: 0;
        animation-name: ${inView ? animate : ''};
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-delay: ${animateDelay};
        animation-duration: ${animateDuration};
        animation-fill-mode: forwards;
      `}
      className="flex flex-col items-center space-y-[15px] w-full"
    >
      <div
        css={css`
          margin-bottom: -15px;
          margin-left: -27px;
          display: flex;
          flex-direction: column;
          width: 100%;
          & > * {
            margin-bottom: 15px;
            margin-left: 27px;
          }
        `}
      >
        {/* Unit left */}
        <div
          css={css`
            flex: 0 0 auto;
            max-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <span className="h-[62px] w-[62px] object-contain inline-block transition-all duration-300">
            <Image className="h-full w-full object-center" />
          </span>
        </div>
        {/* Unit body */}
        <div
          css={css`
            flex: 0 1 auto;
          `}
        >
          <h6 className="text-[17px] uppercase leading-[25.5px] font-title text-heading text-center">
            {title}
          </h6>
          <p className="text-[12px] mt-[10px] leading-[18px] font-[300] text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

const listFeaturesSvg: FeatureSvgProps[] = [
  {
    title: 'Quality',
    description: 'We provide the best quality products for you',
    component: ServiceOne,
    animate: AnimateType.FADE_IN_LEFT_SM,
    delay: 400
  },
  {
    title: 'Fast Delivery',
    description: 'We provide the best quality products for you',
    component: ServiceTwo,
    animate: AnimateType.FADE_IN_RIGHT_SM,
    delay: 600
  },
  {
    title: 'Support',
    description: 'We provide the best quality products for you',
    component: ServiceThree,
    animate: AnimateType.FADE_IN_LEFT_SM,
    delay: 800
  },
  {
    title: 'Why Choose Us',
    description: 'We provide the best quality products for you',
    component: ServiceOne,
    animate: AnimateType.FADE_IN_RIGHT_SM,
    delay: 800
  },
  {
    title: 'Reliability',
    description: 'We provide the best quality products for you',
    component: ServiceTwo,
    animate: AnimateType.FADE_IN_LEFT_SM,
    delay: 600
  },
  {
    title: 'Change Management',
    description: 'We provide the best quality products for you',
    component: ServiceThree,
    animate: AnimateType.FADE_IN_RIGHT_SM,
    delay: 400
  }
]

// https://undraw.co/illustrations

const Title = () => {
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
      </ContainerFluid>
    </div>
  )
}

const Features = () => {
  return (
    <div>
      <Title />
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 container max-w-2xl mx-auto gap-[60px] mt-[65px] overflow-hidden"
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

          @keyframes fadeInRightSm {
            0% {
              opacity: 0;
              transform: translateX(150px) scale(0.8);
            }
            70% {
              transform: translateX(-10px) scale(1.02);
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
        `}
      >
        {listFeaturesSvg.map((item) => (
          <FeatureItem key={item.title} {...item} />
        ))}
      </div>
      {/* Contact */}
      <div
        css={css`
          background-image: url(${link});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
          }
        `}
      >
        <div className="container py-[75px] mt-[60px] relative z-10">
          <ContainerFluid>
            <div className="bg-transparent flex items-center justify-center">
              <div className="w-full h-full flex flex-col gap-4 items-center max-w-md">
                <h2 className="text-center text-white uppercase font-title text-[28px] leading-[42px] font-normal animate__animated animate__fadeInLeft animation-delay-600 ease-in-out">
                  <span className="inline-block">Why &nbsp;</span>
                  <span className="inline-block text-primary">VMS</span>
                  <span className="inline-block">.,JSC</span>
                </h2>
                <p className="text-white text-center leading-[25.5px]">
                  After years of experience and more than 500, 000 people
                  powered with the help of our solar panels, we think the choice
                  is really obvious here!
                </p>
                <Button text="Read more about us" type="secondary" href="#" />
              </div>
            </div>
          </ContainerFluid>
        </div>
      </div>
    </div>
  )
}

export default Features
