export default function DreamCompany() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-5 items-center gap-y-8 md:gap-x-12">
        
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <img
            src="/Images/thumbsup.png"
            alt="Thumbs up team"
            className="w-full rounded-lg object-cover"
          />
        </div>

        <div className="md:col-span-3 flex flex-col gap-4 text-center md:text-left items-center md:items-start w-full">
          <h2 className="text-2xl md:text-5xl font-bold text-black w-full">
            We will help you to become an employee in your dream company
          </h2>
          <p className="text-gray-600 w-full">
            Everyone has a high goal in mind: "I want to work at X company, it would be my dream!".
            Well no need to worry folks, because JobNow has got you covered with every job that
            you can possibly think of, so don't hesitate to search for your dream job.
          </p>
          <button className="mt-2 border border-[#00D5AE] text-[#00D5AE] hover:bg-[#00D5AE] hover:text-white transition px-5 py-2 rounded-md text-sm font-medium cursor-pointer">
            Learn More
          </button>
        </div>

      </div>
    </section>
  )
}
