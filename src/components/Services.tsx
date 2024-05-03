import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export function Services() {
  return (
    <section className="bg-[#211e3b]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-20 lg:py-48 3xl:px-0">
        <div className="flex flex-col space-y-16 lg:space-y-32">
          {/* CONTENT */}
          <div className="text-white text-center space-y-4 lg:space-y-0">
            <p className="uppercase font-semibold text-base">Popular IT services</p>
            <h1 className="lg:text-5xl text-3xl font-bold">Our Professional Solutions <br />For IT Business</h1>
          </div>

          {/* CARDS */}
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="border border-[#312e49] font-semibold flex flex-col items-center py-16 space-y-4 rounded-md hover:bg-[#2e2a50] hover:border-[#2e2a50] transition-all duration-300">
              <Image src="/sicon1.png" alt="Serviços TI" width={140} height={140} />
              <h4 className="text-white">Manage IT Services</h4>
              <p className="text-[#9a95c0] text-center w-4/5">Sed perspicias unde omnis natus error volute</p>
              <Link href="/" className="text-[#9a95c0] uppercase flex items-center gap-4">
                learn more
                <FaArrowRight size={14} />
              </Link>
            </div>

            <div className="border border-[#312e49] font-semibold flex flex-col items-center py-16 space-y-4 rounded-md hover:bg-[#2e2a50] hover:border-[#2e2a50] transition-all duration-300">
              <Image src="/sicon2.png" alt="Serviços TI" width={140} height={140} />
              <h4 className="text-white">Manage IT Services</h4>
              <p className="text-[#9a95c0] text-center w-4/5">Sed perspicias unde omnis natus error volute</p>
              <Link href="/" className="text-[#9a95c0] uppercase flex items-center gap-4">
                learn more
                <FaArrowRight size={14} />
              </Link>
            </div>

            <div className="border border-[#312e49] font-semibold flex flex-col items-center py-16 space-y-4 rounded-md hover:bg-[#2e2a50] hover:border-[#2e2a50] transition-all duration-300">
              <Image src="/sicon3.png" alt="Serviços TI" width={140} height={140} />
              <h4 className="text-white">Manage IT Services</h4>
              <p className="text-[#9a95c0] text-center w-4/5">Sed perspicias unde omnis natus error volute</p>
              <Link href="/" className="text-[#9a95c0] uppercase flex items-center gap-4">
                learn more
                <FaArrowRight size={14} />
              </Link>
            </div>

            <div className="border border-[#312e49] font-semibold flex flex-col items-center py-16 space-y-4 rounded-md hover:bg-[#2e2a50] hover:border-[#2e2a50] transition-all duration-300">
              <Image src="/sicon4.png" alt="Serviços TI" width={140} height={140} />
              <h4 className="text-white">Manage IT Services</h4>
              <p className="text-[#9a95c0] text-center w-4/5">Sed perspicias unde omnis natus error volute</p>
              <Link href="/" className="text-[#9a95c0] uppercase flex items-center gap-4">
                learn more
                <FaArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}