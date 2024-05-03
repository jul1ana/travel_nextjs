import { CustomLink } from "./CustomLink";

export function MiniMap() {
  return (
    <div className="bg-cover bg-[url('/cta_bg1.png')] bg-[#211e3b] rounded-md mx-4 mb-40 p-6 lg:mx-10 lg:py-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row justify-around">
        <h1 className="text-white font-bold text-3xl text-center">Ready To Get Free Consulations For <span className="lg:hidden">Any Kind Of It Solutions <br />?</span> </h1>

        <div className="flex flex-col lg:flex-row gap-4">
          <CustomLink href='/' size="default">get started</CustomLink>
          <CustomLink href='/' theme="blackout" size="default">read more</CustomLink>
        </div>
      </div>
    </div>
  )
}