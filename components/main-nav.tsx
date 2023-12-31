'use client';

import Link from 'next/link';
import Button from './button';
import { Times, MenuIcon } from './icons';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className={`px-6 lg:px-14 py-8 flex justify-between items-center bg-transparent z-50 relative  ${
        pathname === '/contact' || pathname === '/register'
          ? ''
          : 'border-b border-b-secondary-100'
      }`}
    >
      <Link href="/">
        <h1 className="text-primary-100 font-clash-display font-bold text-xl lg:text-4xl">
          get<span className="text-primary-200">linked</span>
        </h1>
      </Link>

      <div className="hidden lg:flex items-center justify-between gap-24">
        <ul className="flex gap-10">
          <li>
            <CustomLink path="/">timeline</CustomLink>
          </li>
          <li>
            <CustomLink path="/">overview</CustomLink>
          </li>
          <li>
            <CustomLink path="/">
              <span className="uppercase">
                faq<span className="lowercase">s</span>
              </span>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className={
                pathname === '/contact'
                  ? 'text-transparent bg-gradient-to-r bg-clip-text'
                  : ''
              }
              path="/contact"
            >
              contact
            </CustomLink>
          </li>
        </ul>

        <Button
          label="register"
          path="/register"
        />
      </div>

      {/* only visibile on mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="lg:hidden">
            <MenuIcon />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-background-100">
          <SheetDescription className="mt-20">
            <div>
              <ul className="flex flex-col gap-4">
                <li>
                  <SheetClose asChild>
                    <CustomLink path="/">timeline</CustomLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <CustomLink path="/">overview</CustomLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <CustomLink path="/">
                      <span className="uppercase">
                        faq<span className="lowercase">s</span>
                      </span>
                    </CustomLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <CustomLink path="/contact">contact</CustomLink>
                  </SheetClose>
                </li>
              </ul>

              <div className="mt-6">
                <SheetClose asChild>
                  <Button
                    label="register"
                    path="/register"
                  />
                </SheetClose>
              </div>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export function Close() {
  return (
    <button className="rounded-full bg-gradient-to-r from-primary-200 to-primary-300 flex justify-center items-center p-[0.15em]">
      <div className="bg-background-100 p-2 rounded-full -translate-x-[0.04rem]">
        <Times />
      </div>
    </button>
  );
}

function CustomLink({
  path,
  children,
  className,
}: {
  path: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Link
        href={path}
        className={cn(
          'capitalize text-primary-100 text-lg lg:hover:text-transparent lg:hover:bg-gradient-to-r from-primary-400 to-primary-300 lg:bg-clip-text transition-all duration-300 ease-out',
          className
        )}
      >
        {children}
      </Link>
    </>
  );
}
