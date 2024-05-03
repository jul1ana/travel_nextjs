import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { FaArrowRight } from "react-icons/fa";

const link = tv({
  base: 'flex items-center justify-center gap-3 border border-[#086ad7] rounded bg-[#086ad7] px-6 py-4 lg:px-10 lg:py-3 text-sm text-white uppercase font-semibold transition-all hover:bg-[#211e3b] hover:border hover:border-[#211e3b]',
  variants: {
    size: {
      default: 'px-2 py-4',
      sm: 'px-2 py-4 max-w-[50%]'
    },
    theme: {
      principal: '',
      minimal: 'text-black bg-transparent hover:border hover:border-[#086ad7] hover:bg-[#086ad7] hover:text-white',
      off: 'text-[#211E3B] bg-[#EFEFF1] border-[#EFEFF1] hover:bg-[#000] hover:text-white',
      blackout: 'text-[#FFF] bg-[#312E49] border border-[#312E49] hover:bg-[#FFF] hover:text-[#086ad7]'
    },
  },
  defaultVariants: {
    size: 'default',
    theme: 'principal'
  }
})

export type CustomLinkProps = LinkProps & VariantProps<typeof link> & {
  children: ReactNode;
};

export function CustomLink({ children, size, theme, ...props }: CustomLinkProps) {
  return (
    <Link className={link({ size, theme })} {...props}>
      {children}
      <FaArrowRight size={14} />
    </Link>
  );
}
