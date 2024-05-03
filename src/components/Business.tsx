import Image from "next/image"

export function Business() {
  return (
    <section className="mx-auto max-w-[1440px] space-y-16 px-6 lg:px-20 3xl:px-0">
      <div className="text-center">
        <p className="uppercase text-[#086ad7] font-semibold">How can help you</p>
        <h1 className="text-[#211e3b] text-3xl font-bold lg:text-5xl">We Help Your IT Business</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:mx-40">
        <Image src="/feature_img.jpg" alt="Negócios" width={370} height={470} className="rounded-md hidden lg:block" />

        <div className="grid grid-rows-1 gap-6 lg:grid-cols-2 lg:h-full">
          <div className=" flex items-center gap-6 p-5 lg:p-10 rounded-md bg-white shadow-xl shadow-blue-100 hover:text-[#086ad7]">
            <Image src="/ficon1.png" alt="Icon" width={60} height={60} />

            <div className="space-y-2">
              <h3 className="text-lg lg:text-2xl font-bold">IT Consultancy</h3>
              <p className="font-semibold text-gray-500">Faster & Smarter Solutions</p>
            </div>
          </div>

          <div className=" flex items-center gap-6 p-5 lg:p-10 rounded-md bg-white shadow-xl shadow-blue-100 hover:text-[#086ad7]">
            <Image src="/ficon2.png" alt="Icon" width={60} height={60} />

            <div className="space-y-2">
              <h3 className="text-lg lg:text-2xl font-bold">Cyber Security</h3>
              <p className="font-semibold text-gray-500">Faster & Smarter Solutions</p>
            </div>
          </div>

          <div className=" flex items-center gap-6 p-5 lg:p-10 rounded-md bg-white shadow-xl shadow-blue-100 hover:text-[#086ad7]">
            <Image src="/ficon3.png" alt="Icon" width={60} height={60} />

            <div className="space-y-2">
              <h3 className="text-lg lg:text-2xl font-bold">Development</h3>
              <p className="font-semibold text-gray-500">Faster & Smarter Solutions</p>
            </div>
          </div>

          <div className=" flex items-center gap-6 p-5 lg:p-10 rounded-md bg-white shadow-xl shadow-blue-100 hover:text-[#086ad7]">
            <Image src="/ficon4.png" alt="Icon" width={60} height={60} />

            <div className="space-y-2">
              <h3 className="text-lg lg:text-2xl font-bold">UX/UI Strategy</h3>
              <p className="font-semibold text-gray-500">Faster & Smarter Solutions</p>
            </div>
          </div>

          <div className="bg-contain bg-[url('/wave.png')] flex items-center justify-center p-8 lg:p-6 bg-blue-600 rounded-md shadow-xl shadow-blue-100 lg:col-span-2">
            <p className="text-white text-xl text-left lg:text-center font-semibold">Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae</p>
          </div>
        </div>
      </div>
    </section>
  )
}