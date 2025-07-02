'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { FaBrain, FaChartLine, FaUniversity, FaProjectDiagram, FaTools, FaFlask } from 'react-icons/fa'

const categories = [
  { icon: <FaBrain />, title: 'Design and Development', jobs: '380' },
  { icon: <FaChartLine />, title: 'Accounting and Finance', jobs: '350' },
  { icon: <FaUniversity />, title: 'Banks Institution', jobs: '350' },
  { icon: <FaProjectDiagram />, title: 'Product Management', jobs: '350' },
  { icon: <FaTools />, title: 'Engineering and Software', jobs: '300' },
  { icon: <FaFlask />, title: 'Research and Science', jobs: '290' }
]

export default function Categories() {
  return (
    <section className="py-20 bg-[#f0fdfa]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Job Categories</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          So many jobs are currently open for some of you who are hungry for opportunites "not food of course we aren't a restaurant after all" so these are the most popular job categories.
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="group h-[190px] md:h-[170px] p-6 bg-white rounded-xl shadow-sm text-left transition duration-300 hover:bg-[#00D5AE] hover:text-white cursor-pointer flex flex-col justify-between">
                <div className="text-5xl text-[#00D5AE] group-hover:text-white mb-6">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 leading-snug">{cat.title}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-white">{cat.jobs} Job Vacancy</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="mt-10 border border-[#00D5AE] text-[#00D5AE] hover:bg-[#00D5AE] hover:text-white transition px-6 py-2 rounded-md text-sm font-medium cursor-pointer">
          View More
        </button>
      </div>
    </section>
  )
}
