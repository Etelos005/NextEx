import { HiUserAdd, HiDocumentText, HiSearch, HiUpload } from 'react-icons/hi'

export default function HowItWorks() {
  return (
    <section className="py-20 px-3 sm:px-4 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-5 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-5 mb-10">How it Works</h2>
            <p className="text-gray-600 max-w-md mb-5 md:mb-12">
              Now if you're wondering how this website works, here are some things you can do to start up.
            </p>
          </div>

          <div className="hidden md:block">
            <button className="border border-[#00D5AE] text-[#00D5AE] hover:bg-[#00D5AE] hover:text-white transition px-5 py-2 rounded-md text-sm font-medium cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {[
            {
              icon: <HiUserAdd className="text-[#00D5AE] text-4xl mb-4" />,
              title: 'Register',
              desc: 'Create your account to get started and track your job applications easily.',
            },
            {
              icon: <HiDocumentText className="text-[#00D5AE] text-4xl mb-4" />,
              title: 'Create a Resume',
              desc: 'Use our tools to build a professional resume that gets noticed.',
            },
            {
              icon: <HiSearch className="text-[#00D5AE] text-4xl mb-4" />,
              title: 'Find Job',
              desc: 'Search and filter thousands of job opportunities tailored for you.',
            },
            {
              icon: <HiUpload className="text-[#00D5AE] text-4xl mb-4" />,
              title: 'Apply Job',
              desc: 'Submit your resume directly and monitor your application status.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-left transform transition duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-[#00D5AE] hover:ring-offset-2"
            >
              {card.icon}
              <h3 className="text-lg font-bold mb-2 text-[#004466]">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-6">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center">
          <button className="border border-[#00D5AE] text-[#00D5AE] hover:bg-[#00D5AE] hover:text-white transition px-6 py-2 rounded-md text-sm font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
