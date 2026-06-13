import { Button } from "@/components/ui/button";
import { Cog, Crown, InfoIcon, StarIcon } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

export function Nav() {
  return (
    <header>
      <nav className="flex max-w-7xl w-full justify-between items-center py-4  mx-auto">
        <Link href="/start" className="nav-logo flex items-center">
          <Logo />
          somethingFountain
        </Link>
        <ul className="flex gap-20 items-center">
          <Button asChild>
            <Link href="/start">Start</Link>
          </Button>
          <li>
            <Link
              href="/settings"
              className="flex hover:bg-accent focus:bg-accent"
            >
              <span>
                <Cog />
              </span>
              settings
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex hover:bg-accent focus:bg-accent"
            >
              <span>
                <InfoIcon />
              </span>
              about
            </Link>
          </li>
          <li>
            <Link
              href="/premium"
              className="flex hover:bg-accent focus:bg-accent"
            >
              <span>
                <Crown />
              </span>
              premium
            </Link>
          </li>
          <li>
            <Link href="#" className="flex hover:bg-accent focus:bg-accent">
              <span>
                <StarIcon />
              </span>
              favorites
            </Link>
          </li>
          <Button asChild>
            <Link href="#">Login</Link>
          </Button>
        </ul>
      </nav>
      <div className="absolute h-[2px] w-full bg-foreground"></div>
    </header>
  );
}
