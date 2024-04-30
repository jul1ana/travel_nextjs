import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
}

export function ButtonNav({ type, title, icon }: ButtonProps) {
  return (
    <button type={type} className="flex items-center justify-center gap-3 border rounded bg-[#086ad7] px-8 py-4 text-white transition-all hover:bg-black">
      <label className="bold-16 whitespace-nowrap">{title}</label>
      {icon && <Image src={icon} alt={title} width={18} height={18} />}
    </button>
  )
}