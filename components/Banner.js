import { FaSearchLocation, FaSearch, FaChartBar } from 'react-icons/fa'
import { BsShieldShaded } from 'react-icons/bs'

export default function Banner() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Green background half */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 bg-[#00D5AE] rounded-bl-[100px] z-0" />
      <div className="block md:hidden absolute inset-0 bg-[#00D5AE] z-0" />

      {/* CONTENT CENTERED */}
      <div className="relative container mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT TEXT */}
          <div className="bg-white flex items-start justify-center">
            <div className="w-full px-4 pt-24 md:pt-24 pb-10 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Search, Find, & Apply
              </h1>
              <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
                Find whatever job you need: Engineer, Doctor, Lawyer, Taxi Driver, you choose!
                And of course, we should know where you live because we don't want
                you to work far from home after all.
              </p>

              <div className="flex flex-col md:flex-row gap-2 items-center bg-white rounded-xl p-2 shadow w-full max-w-[500px] md:mx-0 mx-auto">
                <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md w-full md:w-auto">
                  <FaSearch className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Job title or Keyword"
                    className="bg-transparent text-black placeholder:text-gray-400 outline-none text-sm w-full"
                  />
                </div>

                <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md w-full md:w-auto cursor-pointer">
                  <FaSearchLocation className="text-gray-500" />
                  <select className="bg-transparent text-sm text-gray-600 outline-none w-full">
                    <option value="">Select Location</option>
                    <option value="Beirut">Beirut</option>
                    <option value="Tripoli">Tripoli</option>
                    <option value="Saida">Saida</option>
                    <option value="Zahle">Zahle</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="bg-[#00D5AE] hover:bg-[#00bfa0] text-white px-6 py-2 rounded-md text-sm transition cursor-pointer"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* ICONS */}
          <div className="relative w-full min-h-[400px] md:min-h-full overflow-hidden pt-0">
            <div className="absolute top-[10%] left-[15%] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[-10deg]">
              <FaSearch className="text-[#00D5AE] text-2xl" />
            </div>
            <div className="absolute bottom-[10%] left-[10%] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[-10deg]">
              <BsShieldShaded className="text-[#00D5AE] text-2xl" />
            </div>
            <div className="absolute bottom-[40%] right-[10%] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[10deg]">
              <FaChartBar className="text-[#00D5AE] text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
