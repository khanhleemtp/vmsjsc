import { css } from '@emotion/react'
import 'animate.css'

const HomeText = () => {
  return (
    <div className="absolute inset-0 z-10 bg-transparent">
      <div className="h-full flex items-center justify-center">
        <div className="container max-w-md mx-auto">
          <div className="flex flex-wrap justify-center gap-y-[20px]">
            <div className="flex flex-col gap-[20px] px-[12px]">
              {/* Heading */}
              <div>
                <h1 className="overflow-hidden text-left font-title text-[36px] font-normal">
                  <span className=" animation-delay-800 ease-in-out inline-block uppercase animate__animated animate__fadeInUp text-primary">
                    eco
                  </span>
                  <span className=" animation-delay-800 ease-in-out inline-block uppercase animate__animated animate__fadeInDown text-white">
                    tech solar panels
                  </span>
                </h1>
              </div>
              {/* Description */}
              <div className="text-[17px] animate__animated animate__fadeInUp animation-delay-1600">
                <p className="text-white text-left">
                  Solar panels are perfect if you are looking for a reliable
                  source of additional power and energy for your home for
                  office.
                </p>
              </div>
              {/* Button */}
              <div className="delay-[2000ms] animate__animated animate__zoomIn animation-delay-1600">
                <a
                  href="#"
                  className="bg-primary text-white border-primary"
                  css={css`
                    color: #fff;
                    font-weight: 700;
                    text-transform: uppercase;
                    transition: 0.3s ease-out;
                    min-width: 200px;
                    border-radius: 25px;
                    border-width: 2px;
                    white-space: nowrap;
                    padding: 5px 25px;
                    line-height: 26.6px;
                    font-size: 14px;
                    min-width: 200px;
                    display: inline-block;
                    text-align: center;
                  `}
                >
                  Find out more
                </a>
              </div>
            </div>

            {/* Contact */}
            <div></div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeText
