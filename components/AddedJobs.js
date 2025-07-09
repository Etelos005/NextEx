'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'

const jobs = [
  {
    logo: '/Images/ui-ux.png',
    title: 'UI/UX Designer',
    company: 'Dimension Studio',
    description: 'Design and develop user-centered interfaces for web and mobile apps. Collaborate with teams, conduct user research, and ensure seamless design implementation for enhanced usability. Design and develop user-centered interfaces for web and mobile apps. Collaborate with teams, conduct user research, and ensure seamless design implementation. Design and develop user-centered interfaces.',
    location: 'San Francisco, CA',
    type: 'Full Time'
  },
  {
    logo: '/Images/fullstack.png',
    title: 'Full Stack Developer',
    company: 'Alpander',
    description: 'Work on both frontend and backend development using modern frameworks. Optimize application performance and ensure scalability across multiple platforms and environments. Work on both frontend and backend development using modern frameworks. Optimize application performance and ensure scalability across multiple platforms and environments.Work on both frontend and backend.',
    location: 'San Francisco, CA',
    type: 'Full Time'
  },
  {
    logo: '/Images/design.png',
    title: 'Product Designer',
    company: 'XReact Tech',
    description: 'Create wireframes, prototypes, and UI designs for some of the products. Drive innovation through design thinking and maintain consistency across all digital touchpoints. Create wireframes, prototypes, and UI designs for SaaS products. Drive innovation through design thinking and maintain consistency across all digital touchpoints. Create wireframes prototypes and UI.',
    location: 'San Francisco, CA',
    type: 'Full Time'
  },
  {
    logo: '/Images/data.png',
    title: 'Data Analyst',
    company: 'DataBridge Analytics',
    description: 'Analyze data trends and deliver actionable insights to business teams. Develop dashboards and reports for executive decision-making support. Analyze data trends and deliver actionable insights to business teams. Develop dashboards and reports for executive decision-making support. Analyze data trends and deliver actionable insights to business teams. Analyze data trends and insights.',
    location: 'New York, NY',
    type: 'Part Time'
  },
  {
    logo: '/Images/cyber.png',
    title: 'Cybersecurity Specialist',
    company: 'SecureNet',
    description: 'Protect company data and ensure systems are secure from cyber threats. Monitor security systems and respond promptly to incidents. Protect company data and ensure systems are secure from cyber threats. Monitor security systems and respond promptly to incidents. Monitor security systems and respond promptly to incidents. Protect company data and ensure systems are secure from cyber threats.',
    location: 'Los Angeles, CA',
    type: 'Full Time'
  }
]

export default function AddedJobs() {
  return (
    <section id="location" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recently Added Jobs</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          We heard your feedback, don’t worry. So of course, we looked into it and here is the good news my people! We recently added new jobs so our arsenal is expanded. Here are the new listings.
        </p>

        <div className="relative z-10 mb-14">
          <Swiper
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 }
            }}
          >
            {jobs.map((job, index) => (
              <SwiperSlide key={index} className="flex">
                <div className="flex flex-col justify-between bg-white rounded-xl shadow-md text-left w-full p-6">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-20 h-20 rounded-full bg-gray-200 p-3 mb-6 object-contain"
                  />
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-3">{job.title}</h3>
                      <p className="text-sm text-gray-500 mb-9">{job.company}</p>
                      <p className="text-sm text-gray-600 mb-8">{job.description}</p>
                    </div>
                    <div>
                      <div className="flex gap-3 mb-6">
                        <span className="flex items-center gap-2 bg-gray-200 px-2.5 py-1 md:px-5 md:py-2.5 rounded text-sm text-black">
                          <FaMapMarkerAlt className="text-sm" /> {job.location}
                        </span>
                        <span className="flex items-center gap-2 bg-gray-200 px-2.5 py-1 md:px-5 md:py-2.5 rounded text-sm text-black">
                          <FaBriefcase className="text-sm" /> {job.type}
                        </span>
                      </div>
                      <button className="text-[#00D5AE] font-bold text-lg flex items-center gap-3 transition-all duration-300 group cursor-pointer">
                        <span className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                          Apply Now <span>{'>'}</span>
                        </span>
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
