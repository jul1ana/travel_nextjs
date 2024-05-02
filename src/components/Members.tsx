import Image from "next/image";
import { CustomLink } from "./CustomLink";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export function Members() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0">
      <div className="space-y-10 flex flex-col items-center">
        {/* TITLE */}
        <div className="space-y-10 lg:space-y-0 lg:flex items-center justify-between lg:w-full">
          <div className="lg:w-1/2">
            <p className="uppercase text-base text-[#086ad7] font-semibold">Exclusive Members</p>
            <h1 className="text-4xl font-bold text-[#211E3B] lg:text-6xl">Meet Our Experience Team Members</h1>
          </div>

          <div>
            <CustomLink href='/' theme="minimal">view all member</CustomLink>
          </div>
        </div>

        {/* CARDS */}
        <div className="space-y-10 lg:space-y-0 lg:flex gap-10">
          <div className="p-6 bg-gray-200 space-y-6 rounded-lg hover:bg-[#086ad7] hover:text-white">
            <div className="bg-gray-500 px-6 py-20 rounded-lg">
              IMAGEM
            </div>

            <div className="font-semibold space-y-4 flex flex-col items-center">
              <h4 className="text-[#211E3B] text-xl hover:text-white">Wallace S. Camacho</h4>
              <p className="text-gray-500 hover:text-white">Business Manager</p>

              <div className="flex items-center justify-center gap-6">
                <FaFacebookF size={24} />
                <FaTwitter size={24} />
                <FaYoutube size={24} />
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-200 space-y-6 rounded-lg hover:bg-[#086ad7] hover:text-white">
            <div className="bg-gray-500 px-6 py-20 rounded-lg">
              IMAGEM
            </div>

            <div className="font-semibold space-y-4 flex flex-col items-center">
              <h4 className="text-[#211E3B] text-xl hover:text-white">Wallace S. Camacho</h4>
              <p className="text-gray-500 hover:text-white">Business Manager</p>

              <div className="flex items-center justify-center gap-6">
                <FaFacebookF size={24} />
                <FaTwitter size={24} />
                <FaYoutube size={24} />
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-200 space-y-6 rounded-lg hover:bg-[#086ad7] hover:text-white">
            <div className="bg-gray-500 px-6 py-20 rounded-lg">
              IMAGEM
            </div>

            <div className="font-semibold space-y-4 flex flex-col items-center">
              <h4 className="text-[#211E3B] text-xl hover:text-white">Wallace S. Camacho</h4>
              <p className="text-gray-500 hover:text-white">Business Manager</p>

              <div className="flex items-center justify-center gap-6">
                <FaFacebookF size={24} />
                <FaTwitter size={24} />
                <FaYoutube size={24} />
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-200 space-y-6 rounded-lg hover:bg-[#086ad7] hover:text-white">
            <div className="bg-gray-500 px-6 py-20 rounded-lg">
              IMAGEM
            </div>

            <div className="font-semibold space-y-4 flex flex-col items-center">
              <h4 className="text-[#211E3B] text-xl hover:text-white">Wallace S. Camacho</h4>
              <p className="text-gray-500 hover:text-white">Business Manager</p>

              <div className="flex items-center justify-center gap-6">
                <FaFacebookF size={24} />
                <FaTwitter size={24} />
                <FaYoutube size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}