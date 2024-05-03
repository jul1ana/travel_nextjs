import { CustomLink } from "./CustomLink";
import { FaCheck } from "react-icons/fa6";

export function Plans() {
  return (
    <section className="bg-[#211e3b]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:py-48 3xl:px-0 space-y-20">
        {/* TITLE */}
        <div className="text-white text-center">
          <p className="uppercase font-semibold text-base">OUR PRICING PLAN</p>
          <h1 className="lg:text-5xl text-2xl font-bold">Awesome Pricing Plan</h1>
        </div>

        {/* CARDS */}
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="border-2 border-[#312e49] hover:bg-[#086ad7] p-10 space-y-10 rounded-md flex flex-col items-start">
            <div className="font-semibold space-y-4 hover:text-[#FFF]">
              <h3 className="text-xl text-white">Basic Plan</h3>
              <p className="text-[#9a95c0] leading-6">Quis autem vel eum iure reprehes derit quin voluptate velite</p>
              <p className="text-2xl text-white">$25.63 <span className="text-base text-[#9a95c0]">monthly</span></p>
            </div>

            <ul className="space-y-2 text-base font-semibold text-[#9a95c0]">
              <li className="flex items-center gap-3">
                <FaCheck />
                IT Consulting
              </li>
              <li className="flex items-center gap-3">
                <FaCheck />
                Product Engineering
              </li>
              <li className="flex items-center gap-3">
                <FaCheck />
                Digital Solutions
              </li>
            </ul>

            <CustomLink href='/' theme="blackout" size="default">get started</CustomLink>
          </div>

          <div className="border-2 border-[#312e49] hover:bg-[#086ad7] p-10 space-y-10 rounded-md flex flex-col items-start">
            <div className="font-semibold space-y-4 hover:text-[#FFF]">
              <h3 className="text-xl text-white">Basic Plan</h3>
              <p className="text-[#9a95c0] leading-6">Quis autem vel eum iure reprehes derit quin voluptate velite</p>
              <p className="text-2xl text-white">$25.63 <span className="text-base text-[#9a95c0]">monthly</span></p>
            </div>

            <ul className="space-y-2 text-base font-semibold text-[#9a95c0]">
              <li className="flex items-center gap-3">
                <FaCheck />
                IT Consulting
              </li>
              <li className="flex items-center gap-3">
                <FaCheck />
                Product Engineering
              </li>
              <li className="flex items-center gap-3">
                <FaCheck />
                Digital Solutions
              </li>
            </ul>

            <CustomLink href='/' theme="blackout" size="default">get started</CustomLink>
          </div>

          <div className="border-2 border-[#312e49] hover:bg-[#086ad7] p-10 space-y-10 rounded-md flex flex-col items-start">
            <div className="font-semibold space-y-4 hover:text-[#FFF]">
              <h3 className="text-xl text-white">Basic Plan</h3>
              <p className="text-[#9a95c0] leading-6">Quis autem vel eum iure reprehes derit quin voluptate velite</p>
              <p className="text-2xl text-white">$25.63 <span className="text-base text-[#9a95c0]">monthly</span></p>
            </div>

            <ul className="space-y-2 text-base font-semibold text-[#9a95c0]">
              <li className="flex items-center gap-3">
                <FaCheck />
                IT Consulting
              </li>
              <li className="flex items-center gap-3">
                <FaCheck />
                Product Engineering
              </li>
              <li className="flex items-center gap-3">
                <FaCheck />
                Digital Solutions
              </li>
            </ul>

            <CustomLink href='/' theme="blackout" size="default">get started</CustomLink>
          </div>
        </div>
      </div>
    </section>
  )
}