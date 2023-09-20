import Link from "next/link";
import Button from "../button";
import { Times, MenuIcon } from "../icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="px-6 py-8 flex justify-between border-b border-b-secondary-100">
      <Link href="/">
        <h1 className="text-primary-100 font-clash-display font-bold text-xl">
          get<span className="text-primary-200">linked</span>
        </h1>
      </Link>

      <div className="hidden">
        <ul>
          <li>timeline</li>
          <li>overview</li>
          <li>
            faq<span>s</span>
          </li>
          <li>contact</li>
        </ul>

        <Button label="register" />
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
                    <CustomLink path="/">contact</CustomLink>
                  </SheetClose>
                </li>
              </ul>

              <div className="mt-6">
                <Button label="register" />
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
}: {
  path: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href={path} className="capitalize text-primary-100 text-lg">
        {children}
      </Link>
    </>
  );
}
