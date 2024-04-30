export function Business() {
  return (
    <section className="mx-auto max-w-[1440px] space-y-6 px-6 lg:px-20 3xl:px-0">
      <div className="text-center">
        <p className="uppercase text-[#086ad7] font-semibold">How can help you</p>
        <h1 className="text-[#211e3b] text-3xl font-bold lg:text-4xl">We Help Your IT Business</h1>
      </div>

      <div className="flex items-center justify-center gap-10">
        <div className="hidden lg:block bg-gray-200 p-4"> IMAGEM </div>

        <div className="grid grid-rows-1 gap-4 lg:grid-cols-2">
          <div className="bg-gray-200 p-4">Item 1</div>
          <div className="bg-gray-200 p-4">Item 2</div>
          <div className="bg-gray-200 p-4">Item 3</div>
          <div className="bg-gray-200 p-4">Item 4</div>
          <div className="lg:col-span-2 bg-gray-200 p-4">Item 5 (Ocupando todas as colunas)</div>
        </div>
      </div>
    </section>
  )
}