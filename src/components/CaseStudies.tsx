import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export function CaseStudies() {
  return (
    <section className="mx-auto max-w-[1440px] mb-40 space-y-6 px-6 lg:px-20 3xl:px-0">
      <div className="space-y-16 flex flex-col items-center">
        {/* TITLE */}
        <div className="space-y-10 flex flex-col lg:flex-row lg:space-y-0 items-center justify-between lg:w-full">
          <div>
            <p className="uppercase text-base text-[#086ad7] font-semibold">Our recent project</p>
            <h1 className="text-4xl font-bold text-[#211E3B] lg:text-6xl">Latest Case Studies</h1>
          </div>

          <div>
            <ul className="flex flex-wrap lg:flex-nowrap lg:flex-row items-center gap-6">
              <li className="px-6 py-2 rounded-md shadow-lg shadow-gray-200 font-semibold">
                <Link href="/">All</Link>
              </li>
              <li className="px-6 py-2 rounded-md shadow-lg shadow-gray-200 font-semibold">
                <Link href="/">Business</Link>
              </li>
              <li className="px-6 py-2 rounded-md shadow-lg shadow-gray-200 font-semibold">
                <Link href="/">Consulting</Link>
              </li>
              <li className="px-6 py-2 rounded-md shadow-lg shadow-gray-200 font-semibold">
                <Link href="/">Product</Link>
              </li>
              <li className="px-6 py-2 rounded-md shadow-lg shadow-gray-200 font-semibold">
                <Link href="/">Engineering</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CARDS */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="shadow-lg shadow-blue-200 rounded-md">
            <Image src="/1.jpg" alt="Casos estudos" width={370} height={321} className="rounded-md" />

            <div className="p-8 font-semibold space-y-2">
              <h3 className="text-[#211E3B] text-xl">Business Knowledge</h3>
              <p className="text-gray-500">IT Consultation</p>
              <div className="flex items-center gap-4 text-[#086ad7]">
                <Link href="/" className="uppercase">read more</Link>
                <FaArrowRight size={14} />
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-blue-200 rounded-md">
            <Image src="/1.jpg" alt="Casos estudos" width={370} height={321} className="rounded-md" />

            <div className="p-8 font-semibold space-y-2">
              <h3 className="text-[#211E3B] text-xl">Business Knowledge</h3>
              <p className="text-gray-500">IT Consultation</p>
              <div className="flex items-center gap-4 text-[#086ad7]">
                <Link href="/" className="uppercase">read more</Link>
                <FaArrowRight size={14} />
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-blue-200 rounded-md">
            <Image src="/1.jpg" alt="Casos estudos" width={370} height={321} className="rounded-md" />

            <div className="p-8 font-semibold space-y-2">
              <h3 className="text-[#211E3B] text-xl">Business Knowledge</h3>
              <p className="text-gray-500">IT Consultation</p>
              <div className="flex items-center gap-4 text-[#086ad7]">
                <Link href="/" className="uppercase">read more</Link>
                <FaArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}