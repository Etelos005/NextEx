export default function DreamCompany() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div
          className="w-full h-56 md:h-54 lg:h-100 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('/Images/thumbsup.png')" }}
        />

        <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            We will help you to become an employee in your dream company
          </h2>
          <p className="text-gray-600 max-w-md">
            Everyone has a high goal in mind: "I want to work at X company, it would be my dream!". Well no need to worry folks, because JobNow has got you covered.
          </p>
          <button className="mt-2 border border-[#00D5AE] text-[#00D5AE] hover:bg-[#00D5AE] hover:text-white transition px-5 py-2 rounded-md text-sm font-medium mx-auto md:mx-0 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
