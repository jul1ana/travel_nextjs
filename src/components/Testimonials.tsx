import Image from "next/image"

export function Testimonials() {
  return (
    <section className="flex w-full">
      <div className="hidden lg:block lg:p-6 bg-gray-500 w-1/2">IMAGEM</div>

      <div className="space-y-6 p-4 lg:w-1/2 lg:p-20">
        <Image src="/quote.png" alt="Aspas" width={100} height={100} />

        <h2 className="text-[#211E3B] italic text-2xl font-semibold">On the other hand denounc with ghteo indignation and dislike men who so beguiled and demoralized the charms of pleasure the momen blinded by desire cannot foresee the pain and trouble.</h2>

        <div className="flex items-center gap-4">
          <div className="bg-gray-500 p-6 rounded-full"></div>

          <div className="font-semibold">
            <h3 className="text-[#211e3b] text-2xl lg:text-lg">Steven M. McLean</h3>
            <p className="text-[#086ad7] text-lg">UI Designer</p>
          </div>
        </div>
      </div>
    </section>
  )
}