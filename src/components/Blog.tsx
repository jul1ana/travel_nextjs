import { FaRegUserCircle } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { CustomLink } from "./CustomLink";
import Image from "next/image";

export function Blog() {
  return (
    <section className="mx-auto max-w-[1440px] space-y-6 px-6 lg:px-20 3xl:px-0">
      <div className="space-y-14">
        {/* TITLE */}
        <div className="text-center">
          <p className="uppercase text-[#086ad7] font-semibold">LATEST NEWS & BLOG</p>
          <h1 className="text-[#211e3b] text-3xl font-bold lg:text-4xl">Get Every Single Updates</h1>
        </div>

        {/* CARDS */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col p-6 space-y-6 shadow-lg shadow-cyan-100/50 rounded-md">
            <Image src="/blog1.jpg" alt="Blog" width={390} height={220} className="rounded-md" />

            <div className="flex flex-col items-center space-y-6 font-semibold">
              <div className="flex items-center gap-2">
                <FaRegUserCircle color="#696969" />
                <p className="text-[#696969]">Michael K. Steven</p>
              </div>

              <h3 className="text-center w-2/3">Make Honest Design Work As For Digital Business.</h3>

              <div className="flex items-center gap-4">
                <CustomLink href='/' size="default">read more</CustomLink>
                <GoShareAndroid size={28} color="#696969" />
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 space-y-6 shadow-lg shadow-cyan-100/50 rounded-md">
            <Image src="/blog1.jpg" alt="Blog" width={390} height={220} className="rounded-md" />

            <div className="flex flex-col items-center space-y-6 font-semibold">
              <div className="flex items-center gap-2">
                <FaRegUserCircle color="#696969" />
                <p className="text-[#696969]">Michael K. Steven</p>
              </div>

              <h3 className="text-center w-2/3">Make Honest Design Work As For Digital Business.</h3>

              <div className="flex items-center gap-4">
                <CustomLink href='/' size="default">read more</CustomLink>
                <GoShareAndroid size={28} color="#696969" />
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 space-y-6 shadow-lg shadow-cyan-100/50 rounded-md">
            <Image src="/blog1.jpg" alt="Blog" width={390} height={220} className="rounded-md" />

            <div className="flex flex-col items-center space-y-6 font-semibold">
              <div className="flex items-center gap-2">
                <FaRegUserCircle color="#696969" />
                <p className="text-[#696969]">Michael K. Steven</p>
              </div>

              <h3 className="text-center w-2/3">Make Honest Design Work As For Digital Business.</h3>

              <div className="flex items-center gap-4">
                <CustomLink href='/' size="default">read more</CustomLink>
                <GoShareAndroid size={28} color="#696969" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}