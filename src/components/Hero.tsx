import { CustomLink } from "./CustomLink";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0">
      <div className="space-y-3">
        <h2 className="text-4xl font-bold text-[#211E3B]">Solutions For</h2>
        <h1 className="text-5xl font-bold text-[#211E3B]">IT Business</h1>
        <p className="text-lg text-[#211E3B] font-semibold">We Have 25 Years Of Experience In IT Solutions</p>

        <div className="space-y-4">
          <CustomLink href='/' size="sm">TESTE</CustomLink>
          <CustomLink href='/'>TESTE</CustomLink>
          <CustomLink href='/'>TESTE</CustomLink>
          <CustomLink href='/'>TESTE</CustomLink>
        </div>
      </div>

    </section>
  )
}
