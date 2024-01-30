// Import Swiper React components
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Welcome = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      autoplay={{
        delay: 3000,
        waitForTransition: true
      }}
      slidesPerView={1}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet bg-red-700'
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      parallax={true}
      className="h-[84.5vh]"
      coverflowEffect={{
        depth: 100,
        slideShadows: false,
        stretch: 0,
        modifier: 1
      }}
    >
      <SwiperSlide
        className="w-[766px]"
        style={{
          backgroundImage:
            "url('https://livedemo00.template-help.com/wt_prod-12465/images/slide-01.jpg')",
          backgroundPosition: '80% center'
        }}
      >
        Slide 1
      </SwiperSlide>
      <SwiperSlide
        className="bg-center w-[766px]"
        style={{
          backgroundImage:
            "url('https://livedemo00.template-help.com/wt_prod-12465/images/slide-02.jpg')"
        }}
      >
        Slide 2
      </SwiperSlide>
      <SwiperSlide
        className="bg-center w-[766px]"
        style={{
          backgroundImage:
            "url('https://livedemo00.template-help.com/wt_prod-12465/images/slide-03.jpg')"
        }}
      >
        Slide 3
      </SwiperSlide>{' '}
    </Swiper>
  )
}

export default Welcome
