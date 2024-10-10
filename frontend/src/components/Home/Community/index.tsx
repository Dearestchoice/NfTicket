
const Community = () => {
  return (
    <section className="flex justify-center items-center py-6 md:py-8 lg:py-10 font-poppins">
      <div className="bg-[#00FFFF12] border border-nftGreen/85 rounded-lg flex items-center justify-center text-center p-4 mx-auto w-[90%] sm:w-[80%] md:w-[75%] max-w-3xl">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 sm:w-[75%] py-6 sm:py-8 md:py-10 lg:py-12 font-semibold px-2">
          <h3 className="text-base sm:text-2xl md:text-3xl">Join Our Community</h3>
          <p className="text-[#C6C6C6] font-medium text-sm md:text-xl">Join the Future of Event Ticketing</p>
          <div className="border border-nftGreen rounded-md overflow-hidden flex">
            <input type="text" placeholder="Email" className="max-w-[150px] sm:max-w-full sm:flex-1 py-2 px-2 outline-none focus:ring-0 text-nftBlack" />
            <button className="bg-nftGreen text-nftBlack px-4 sm:px-6 md:text-xl flex-1 sm:flex-grow-0">Join</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community