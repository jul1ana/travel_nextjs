import Image from "next/image";
import { PiUsersThreeBold } from "react-icons/pi";

export function About() {
  return (
    <section className="mx-auto max-w-[1440px] space-y-6 px-6 lg:px-20 3xl:px-0">
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:w-full lg:space-x-5">
        {/* CONTENT */}
        <div className="space-y-8 lg:w-1/2 lg:space-y-14">
          <div className="space-y-6">
            <p className="uppercase text-base text-[#086ad7] font-semibold">About Company</p>
            <h1 className="text-4xl font-bold text-[#211E3B] lg:text-6xl">Get’s IT Solutions For <br /> Expert Consultants</h1>
            <p className="text-lg font-semibold text-gray-500 leading-8">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>

          <div className="inline-flex gap-4 border border-gray-200 hover:border-blue-600 p-6 rounded-md">
            <div>
              <PiUsersThreeBold size={40} color="#086ad7" />
            </div>
            <div className="font-semibold">
              <h3 className="text-2xl text-[#211E3B]">Professinoal Consultants</h3>
              <p className="text-base text-gray-500 leading-8">Quis autem vel eum iure reprehenderit quin voluptate velit esse quam</p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="bg-gray-300 px-6 py-40 rounded-md lg:px-0 lg:py-0 lg:w-1/2"> IMAGEM </div>
      </div>
    </section>
  )
}