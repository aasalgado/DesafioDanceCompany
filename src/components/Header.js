import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Header() {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Logo />
            {/* <img
              src="/images/logo-black.png"
              width={200}
              height={100}
              alt="Desafio Dance Company Logo"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "auto", objectFit: "cover" }}
            /> */}
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/#performances"
              className="text-sm font-medium hover:text-primary"
              prefetch={false}
            >
              Performances
            </Link>
            <Link
              href="instructors"
              className="text-sm font-medium hover:text-primary"
              prefetch={false}
            >
              Instructors
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
              prefetch={false}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary"
              prefetch={false}
            >
              Schedule
            </Link>
          </nav>
          <Button className="hidden md:inline-flex ml-20">Join Us</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-xs bg-background p-6 shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary"
                  prefetch={false}
                >
                  Performances
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary"
                  prefetch={false}
                >
                  Dancers
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary"
                  prefetch={false}
                >
                  Contact
                </Link>
                <Button className="w-full">Join Us</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    );
  }


  function Logo() {
  return (
    <img
      src="/images/logo-black.png"
      width={200}
      height={100}
      alt="Desafio Dance Company Logo"
      className="rounded-xl object-cover"
      style={{ aspectRatio: "auto", objectFit: "cover" }}
    />
  );
}

function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    );
  }
  