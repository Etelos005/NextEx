'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'

const jobs = [
  {
    logo: '/Images/ui-ux.png',
    title: 'UI/UX Designer',
    company: 'Dimension Studio',
    description: 'Design and develop user-centered interfaces for web and mobile apps.',
    location: 'San Francisco, CA',
    type: 'Full Time'
  },
  {
    logo: '/Images/fullstack.png',
    title: 'Full Stack Developer',
    company: 'Alpander',
    description: 'Work on both frontend and backend development using modern frameworks.',
    location: 'San Francisco, CA',
    type: 'Full Time'
  },
  {
    logo: '/Images/design.png',
    title: 'Product Designer',
    company: 'XReact Tech',
    description: 'Create wireframes, prototypes and UI designs for our SaaS products.',
    location: 'San Francisco, CA',
    type: 'Full Time'
  },
  {
    logo: '/Images/data.png',
    title: 'Data Analyst',
    company: 'DataBridge Analytics',
    description: 'Analyze data trends and deliver actionable insights to business teams.',
    location: 'New York, NY',
    type: 'Part Time'
  },
  {
    logo: '/Images/cyber.png',
    title: 'Cybersecurity Specialist',
    company: 'SecureNet',
    description: 'Protect company data and ensure systems are secure from cyber threats.',
    location: 'Los Angeles, CA',
    type: 'Full Time'
  }
]

export default function AddedJobs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recently Added Jobs</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          We heard your feedback, don’t worry. So of course, we looked into it and here is the good news my people! We recently added new jobs so our arsenal is expanded. Here are the new listings.
        </p>

        <div className="relative z-10 mb-14">
          <Swiper
            spaceBetween={15}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2.8 }
            }}
          >
            {jobs.map((job, index) => (
              <SwiperSlide key={index} className="flex">
                <div className="flex flex-col justify-between bg-gray-50 rounded-xl shadow-md text-left w-full p-5">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1">{job.title}</h3>
                      <p className="text-sm text-gray-500 mb-8">{job.company}</p>
                      <p className="text-sm text-gray-600 mb-6">{job.description}</p>
                    </div>
                    <div>
                      <div className="flex gap-2 mb-5">
                        <span className="flex items-center gap-2 bg-gray-200 px-3 py-1.5 rounded text-sm text-black">
                          <FaMapMarkerAlt className="text-sm" /> {job.location}
                        </span>
                        <span className="flex items-center gap-2 bg-gray-200 px-3 py-1.5 rounded text-sm text-black">
                          <FaBriefcase className="text-sm" /> {job.type}
                        </span>
                      </div>
                      <button className="text-[#00D5AE] font-bold hover:underline cursor-pointer">
                        Apply Now<span className="ml-2">{'>'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className="border border-[#00D5AE] text-[#00D5AE] hover:bg-[#00D5AE] hover:text-white transition px-6 py-2 rounded-md text-sm font-medium cursor-pointer">
          View More
        </button>
      </div>
    </section>
  )
}
