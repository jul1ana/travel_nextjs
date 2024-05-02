import Image from "next/image"

export function Business() {
  return (
    <section className="mx-auto max-w-[1440px] space-y-6 px-6 lg:px-20 3xl:px-0">
      <div className="text-center">
        <p className="uppercase text-[#086ad7] font-semibold">How can help you</p>
        <h1 className="text-[#211e3b] text-3xl font-bold lg:text-4xl">We Help Your IT Business</h1>
      </div>

      <div className="flex items-center justify-center gap-10 lg:w-full">
        <div className="hidden lg:block bg-gray-200 p-2 w-1/2 text-center font-semibold rounded-md py-56"> IMAGEM </div>

        <div className="grid grid-rows-1 gap-6 lg:grid-cols-2 lg:w-1/2">
          <div className="bg-white p-4 rounded-md shadow-xl shadow-blue-100 hover:text-blue-600">
            <div className="flex items-center gap-4 lg:py-8 lg:px-4 lg:gap-4">
              <Image src="/ficon1.png" alt="Icon" width={60} height={60} />
              
              <div>
                <h3 className="text-lg font-bold">IT Consultancy</h3>
                <p className="font-semibold text-gray-500">Faster & Smarter Solutions</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-xl shadow-blue-100 hover:text-blue-600">
            <div className="flex items-center gap-4 lg:py-8 lg:px-4 lg:gap-4">
              <Image src="/ficon2.png" alt="Icon" width={60} height={60} />
              
              <div>
                <h3 className="text-lg font-bold">Cyber Security</h3>
                <p className="font-semibold text-gray-500">Faster & Smarter Solutions</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-xl shadow-blue-100 hover:text-blue-600">
            <div className="flex items-center gap-4 lg:py-8 lg:px-4 lg:gap-4">
              <Image src="/ficon3.png" alt="Icon" width={60} height={60} />
              
              <div>
                <h3 className="text-lg font-bold">Development</h3>
                <p className="font-semibold text-gray-500">Faster & Smarter Solutions</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-xl shadow-blue-100 hover:text-blue-600">
            <div className="flex items-center gap-4 lg:py-8 lg:px-4 lg:gap-4">
              <Image src="/ficon4.png" alt="Icon" width={60} height={60} />
              
              <div>
                <h3 className="text-lg font-bold">UX/UI Strategy</h3>
                <p className="font-semibold text-gray-500">Faster & Smarter Solutions</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 p-4 rounded-md shadow-xl shadow-blue-100 lg:col-span-2">
            <div className="bg-contain bg-[url('/wave.png')] flex items-center justify-center py-6 lg:py-2">             
              <p className="text-white text-left lg:text-center font-semibold">Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}