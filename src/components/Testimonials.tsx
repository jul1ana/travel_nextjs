import Image from "next/image"

export function Testimonials() {
  return (
    <section className="flex items-center mb-40">
      <Image src="/testi_bg.jpg" alt="Depoimentos" width={960} height={844} className="hidden lg:block" />

      <div className="space-y-6 p-6 lg:p-20">
        <Image src="/quote.png" alt="Aspas" width={100} height={100} />

        <h2 className="text-[#211E3B] italic text-2xl font-semibold leading-8 lg:w-4/5">On the other hand denounc with ghteo indignation and dislike men who so beguiled and demoralized the charms of pleasure the momen blinded by desire cannot foresee the pain and trouble.</h2>

        <div className="flex items-center gap-4">
          <div className="bg-gray-500 h-16 w-16 rounded-full"></div>

          <div className="font-semibold">
            <h3 className="text-[#211e3b] text-xl lg:text-2xl">Steven M. McLean</h3>
            <p className="text-[#086ad7] text-base">UI Designer</p>
          </div>
        </div>
      </div>
    </section>
  )
}