import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

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

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="text-xl font-bold" prefetch={false}>
            Vallabh Wasule
          </Link>
          <nav className="hidden space-x-4 sm:flex">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Home
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Projects
            </Link>
            <Link href="#blogs" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Blog
            </Link>
            <Link href="#resume" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Resume
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-4 sm:p-6">
          <div className="grid gap-6">
            <Link
              href="#about"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#blogs"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              Blogs
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>

        </div>
      </header>
  );
};

export default Navbar;
