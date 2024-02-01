// Import Swiper React components
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
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
        modules={[Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 3000,
          waitForTransition: true
        }}
        speed={1000}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass:
            'swiper-pagination-bullet bg-white w-2 h-2 transition-all',
          bulletActiveClass: 'swiper-pagination-bullet-active scale-150'
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
            className="w-full h-auto bg-cover bg-center bg-no-repeat"
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
