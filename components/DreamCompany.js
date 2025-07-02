export default function DreamCompany() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 items-center gap-12">

        {/* Image always on top for mobile */}
        <div className="md:col-span-6 flex justify-center">
          <img
            src="/Images/thumbsup.png"
            alt="Thumbs up team"
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>

        {/* Text block */}
        <div className="md:col-span-6 flex flex-col gap-4 items-center text-center md:text-left md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            We will help you to become an employee in your dream company
          </h2>
          <p className="text-gray-500 max-w-md text-sm">
            Everyone has a high goal in mind: "I want to work at X company, it would be my dream!". Well no need to worry folks, because JobNow has got you covered with every job that you can possibly think of so don't hesitate to search for your dream job.
          </p>
          <button className="mt-2 border border-[#00D5AE] text-[#00D5AE] hover:bg-[#00D5AE] hover:text-white transition px-6 py-2 rounded-md text-sm font-medium">
            Learn More
          </button>
        </div>

      </div>
    </section>
  )
}
