import Button from '@/components/shared/Button'
import 'animate.css'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'

const link =
  'https://livedemo00.template-help.com/wt_prod-12465/images/parallax-04.jpg'

const HomeText = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  return (
    <div className="absolute inset-0 bg-transparent">
      <div className="h-full flex items-center justify-center relative">
        <div className="container max-w-md mx-auto z-10">
          <div className="flex flex-wrap justify-center gap-y-[20px]">
            <div className="flex flex-col gap-[20px] px-[12px]">
              {/* Heading */}
              <div>
                <h1
                  className="overflow-hidden text-left font-title text-[36px] font-normal"
                  ref={ref}
                >
                  <span
                    className={clsx(
                      'animation-delay-800 ease-in-out inline-block uppercase text-primary',
                      inView ? 'animate__animated animate__fadeInUp' : ''
                    )}
                  >
                    vms
                  </span>
                  <span
                    className={clsx(
                      'animation-delay-800 ease-in-out inline-block uppercase text-white',
                      inView ? 'animate__animated animate__fadeInDown' : ''
                    )}
                  >
                    .,jsc
                  </span>
                </h1>
              </div>
              {/* Description */}
              <div className="text-[17px] animate__animated animate__fadeInUp animation-delay-1600">
                <p className="text-white text-left">
                  Manufacturing, trade and services joint stock company.
                </p>
              </div>
              {/* Button */}
              <div className="delay-[2000ms] animate__animated animate__zoomIn animation-delay-1600">
                <Button href="#" text="Find out more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeText
