// Import Swiper React components
import { css } from '@emotion/react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import HomeText from './Text'

const listBanner = [
  {
    image: '/slide-01.jpg'
  },
  {
    image: '/slide-02.jpg'
  },
  {
    image: '/slide-03.jpg'
  }
]

const HomeContainer = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          waitForTransition: true
        }}
        css={css`
          position: relative;
          & .swiper-slide:after {
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
          }

          .swiper-pagination-bullet {
            background-color: #fff;
            width: 8px;
            height: 8px;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet:hover {
            transform: scale(1.5);
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            transform: scale(1.5);
          }
        `}
        speed={1000}
        slidesPerView={1}
        pagination={{
          clickable: true
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        parallax={true}
        className="h-[84.5vh] relative"
      >
        <HomeText />
        {listBanner.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-auto bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url('${item.image}')`

              // backgroundPosition: '80% center'
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default HomeContainer
