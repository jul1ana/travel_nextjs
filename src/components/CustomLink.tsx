import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const link = tv({
  base: 'flex items-center justify-center gap-3 border border-[#086ad7] rounded bg-[#086ad7] px-6 py-4 lg:px-10 lg:py-5 text-white transition-all hover:bg-[#211e3b] hover:border hover:border-[#211e3b]',
  variants: {
    size: {
      default: 'h-8 px-15',
      sm: 'h-40 px-2'
    },
  },
  defaultVariants: {
    size: 'default',
  }
})

export type CustomLinkProps = LinkProps & VariantProps<typeof link> & {
  children: ReactNode;
};

export function CustomLink({ children, size, ...props }: CustomLinkProps) {
  return (
    <Link className={link({size})} {...props}>
      {children}
    </Link>
  );
}
