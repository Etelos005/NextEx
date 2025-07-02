export default function DreamCompany() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
        
        {/* Image */}
        <div className="md:col-span-6 flex justify-center md:justify-start">
          <img
            src="/Images/thumbsup.png"
            alt="Thumbs up team"
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>

        {/* Text: center on mobile, shifted left on desktop */}
        <div className="md:col-span-6 flex flex-col gap-4 text-center md:text-left items-center md:items-start md:-ml-[120px]">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            We will help you to become an employee in your dream company
          </h2>
          <p className="text-gray-600">
            Everyone has a high goal in mind: "I want to work at X company, it would be my dream!". Well no need to worry folks, because JobNow has got you covered with every job that you can possibly think of so don't hesitate to search for your dream job
          </p>
          <button className="mt-2 border border-[#00D5AE] text-[#00D5AE] hover:bg-[#00D5AE] hover:text-white transition px-5 py-2 rounded-md text-sm font-medium mx-auto md:mx-0 cursor-pointer">
            Learn More
          </button>
        </div>

      </div>
    </section>
  )
}
