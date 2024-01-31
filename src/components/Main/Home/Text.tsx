import { css } from '@emotion/react'
import 'animate.css'

const HomeText = () => {
  return (
    <div className="absolute inset-0 z-10 bg-transparent">
      <div className="h-full flex items-center justify-center">
        <div className="container max-w-md mx-auto">
          <div className="flex flex-wrap justify-center gap-[20px]">
            {/* Heading */}
            <div>
              <h1 className="overflow-hidden space-x-2 text-left">
                <span className="animation-delay-800 ease-in-out text-[36px] inline-block uppercase animate__animated animate__fadeInUp text-white">
                  Welcome
                </span>
                <span className="animation-delay-800 ease-in-out text-[36px] inline-block uppercase font-bold animate__animated animate__fadeInDown text-[#5dd39e]">
                  to VmSJSC
                </span>
              </h1>
            </div>
            {/* Description */}
            <div className="text-[17px] animate__animated animate__fadeInUp animation-delay-1600">
              <p className="text-white text-left">
                Solar panels are perfect if you are looking for a reliable
                source of additional power and energy for your home for office.
              </p>
            </div>
            {/* Button */}
            <div className="text-left text-[17px] delay-[2000ms] animate__animated animate__zoomIn animation-delay-1600">
              <a
                href="#"
                css={css`
                  color: #fff;
                  background-color: #5dd39e;
                  border-color: #5dd39e;
                  font-weight: 700;
                  text-transform: uppercase;
                  transition: 0.3s ease-out;
                  min-width: 200px;
                  border-radius: 25px;
                  border-width: 2px;
                  white-space: nowrap;
                  padding: 5px 25px;
                `}
              >
                Find more out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeText
