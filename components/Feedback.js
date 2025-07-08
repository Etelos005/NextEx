'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useRef } from 'react'

const feedbacks = [
  {
    name: 'Aziz',
    role: 'Uber Driver',
    message: '“Although I am too old for this, but thanks to this app I am still providing food for my family.”',
    image: '/Images/Aziz.jpg'
  },
  {
    name: 'Jessica',
    role: 'UI Designer at Alpander',
    message: '“Working with JobNow was a game changer. The process was seamless and I found my dream job in no time!”',
    image: '/Images/Jessica.jpeg'
  },
  {
    name: 'Taha',
    role: 'Data Analyst at SecureNet',
    message: '“The JobNow platform provided me opportunities I never thought possible. Highly recommend!”',
    image: '/Images/Taha.jpg'
  }
]

export default function Feedback() {
  const textSwiperRef = useRef(null)
  const imageSwiperRef = useRef(null)

  const syncSwipers = (swiper) => {
    if (imageSwiperRef.current && swiper.realIndex !== imageSwiperRef.current.realIndex) {
      imageSwiperRef.current.slideToLoop(swiper.realIndex)
    }
    if (textSwiperRef.current && swiper.realIndex !== textSwiperRef.current.realIndex) {
      textSwiperRef.current.slideToLoop(swiper.realIndex)
    }
  }

  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-0 items-center">
        <div className="md:col-span-2 order-1 mt-8 md:mt-22 md:order-2">
          <div className="hidden md:block">
            <Swiper
              modules={[Navigation]}
              navigation={false}
              spaceBetween={30}
              slidesPerView={1}
              loop
              onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
              onSlideChange={(swiper) => syncSwipers(swiper)}
            >
              {feedbacks.map((feedback, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-[350px] h-[300px] md:w-[450px] md:h-[400px] rounded-lg object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="md:col-span-3 order-2 md:order-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            People’s Feedback about JobNow!
          </h2>
          <p className="text-gray-500 mb-6 md:mb-12 max-w-xl mx-auto md:mx-0 text-sm md:text-base">
            Like democracy, everyone can give their own feedback. So here are some of the testimonials we’ve received from our users.
          </p>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn'
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop
            onSwiper={(swiper) => (textSwiperRef.current = swiper)}
            onSlideChange={(swiper) => syncSwipers(swiper)}
          >
            {feedbacks.map((feedback, index) => (
              <SwiperSlide key={index}>
                <blockquote className="text-base md:text-lg text-gray-800 mb-4 md:mb-8 max-w-xl mx-auto md:mx-0">
                  {feedback.message}
                </blockquote>

                <div className="block md:hidden my-4">
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-[260px] h-[220px] rounded-lg object-cover mx-auto"
                  />
                </div>

                <p className="font-semibold text-lg md:text-2xl mb-1">{feedback.name}</p>
                <p className="text-gray-500 text-sm mb-4 md:mb-6">{feedback.role}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center md:justify-start gap-4 md:gap-6">
            <button className="prev-btn w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full transition-colors duration-300 hover:bg-[#00D5AE] hover:text-white cursor-pointer">
              <FaArrowLeft />
            </button>
            <button className="next-btn w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full transition-colors duration-300 hover:bg-[#00D5AE] hover:text-white cursor-pointer">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
