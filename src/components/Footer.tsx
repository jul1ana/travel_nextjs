import Image from "next/image";
import Link from "next/link";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone, FaRegCalendarAlt } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] space-y-6 px-8 py-16 lg:px-20 3xl:px-0">
      <div className="flex flex-col lg:flex-row gap-10 lg:w-full justify-items-start">
        <div className="lg:w-1/4 flex flex-col gap-10">
          <Link href="/" className="lg:w-52">
            <Image src="/logo.png" alt="Logo" width={100} height={29} />
          </Link>

          <p className="text-[#696969] font-semibold">Sed ut perspiciatis unde omnis natus voluptatem accusa ntiumy doloremque laudantium.</p>

          <div className="flex items-center">
            <input placeholder="Email Address" className="bg-[#F5F5F5] p-4 font-semibold rounded-l-lg" />

            <button className="bg-[#086AD7] p-4 rounded-r-lg">
              <HiOutlineMailOpen color="#FFF" size={24} />
            </button>
          </div>
        </div>

        <div className="lg:w-1/4 space-y-8">
          <h4 className="text-[#211E3B] font-semibold lg:text-2xl">Company</h4>

          <ul className="space-y-4 text-[#696969] font-semibold">
            <li className="flex items-center gap-2">
              <MdKeyboardDoubleArrowRight />
              <Link href="/" className="hover:translate-x-2 transition-all duration-300 hover:text-[#086AD7]">About Us</Link>
            </li>
            <li className="flex items-center gap-2">
              <MdKeyboardDoubleArrowRight />
              <Link href="/" className="hover:translate-x-2 transition-all duration-300 hover:text-[#086AD7]">Company History</Link>
            </li>
            <li className="flex items-center gap-2">
              <MdKeyboardDoubleArrowRight />
              <Link href="/" className="hover:translate-x-2 transition-all duration-300 hover:text-[#086AD7]">Need A Career</Link>
            </li>
            <li className="flex items-center gap-2">
              <MdKeyboardDoubleArrowRight />
              <Link href="/" className="hover:translate-x-2 transition-all duration-300 hover:text-[#086AD7]">Working Process</Link>
            </li>
            <li className="flex items-center gap-2">
              <MdKeyboardDoubleArrowRight />
              <Link href="/" className="hover:translate-x-2 transition-all duration-300 hover:text-[#086AD7]">Blog Post</Link>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/4 space-y-8">
          <h4 className="text-[#211E3B] font-semibold lg:text-2xl">News News</h4>

          <div className="space-y-10">
            <div className="flex gap-4">
              <Image src="/b1.jpg" alt="Notícias" width={100} height={90} className="rounded-md" />

              <div className="font-semibold ">
                <span className="flex items-center gap-1 text-[#696969]"> <FaRegCalendarAlt /> 24th Nov 2020</span>
                <p className="text-[#211E3B] hover:text-[#086AD7]">User’s Perspes Using Story Structure</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Image src="/b1.jpg" alt="Notícias" width={100} height={90} className="rounded-md" />

              <div className="font-semibold ">
                <span className="flex items-center gap-1 text-[#696969]"> <FaRegCalendarAlt /> 24th Nov 2020</span>
                <p className="text-[#211E3B] hover:text-[#086AD7]">User’s Perspes Using Story Structure</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 space-y-8">
          <h4 className="text-[#211E3B] font-semibold lg:text-2xl">Contact Us</h4>

          <div className="flex items-center gap-2">
            <FaLocationDot color="#086AD7" />
            <p className="font-semibold text-[#696969]">256 Elizaberth Ave, Brooklyn, CA, 90025</p>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineMailOpen color="#086AD7" />
            <p className="font-semibold text-[#696969]">info@supportexam.com</p>
          </div>

          <div className="flex items-center gap-2">
            <FaPhone color="#086AD7" />
            <p className="font-semibold text-[#696969]">+012 (345) 678 99</p>
          </div>
        </div>
      </div>
    </footer>
  )
}