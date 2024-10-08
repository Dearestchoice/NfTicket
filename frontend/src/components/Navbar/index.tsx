import { useAccount } from "wagmi";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { NavLink } from "react-router-dom";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/button";

import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import { MenuIcon } from "./Icons";

const linkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? "text-white" : "text-[#878787]";
};

const Navbar = () => {
  const account = useAccount();

  return (
    <nav className="flex gap-2 items-center justify-between px-4 sm:px-6 lg:px-8 py-2 md:py-4">
      <div className="flex items-center gap-2">
        <img src="/images/nfticket.webp" alt="" className="h-12 " />
      </div>
      <ul className="hidden lg:flex list-none gap-6 xl:gap-10 items-center justify-between font-medium font-poppins text-lg xl:text-xl">
        <NavLink to={"/"} className={linkClass}>
          <li className="pointer">Home</li>
        </NavLink>
        <NavLink to={"/events"} className={linkClass}>
          <li className="pointer">Events</li>
        </NavLink>
        <NavLink to={"/mint"} className={linkClass}>
          <li className="pointer">Mint Ticket</li>
        </NavLink>
        <NavLink to={"/tickets"} className={linkClass}>
          <li className="pointer">My Tickets</li>
        </NavLink>
      </ul>
      <div className="flex gap-2 sm:gap-4 items-center">
        <div className="hidden sm:flex items-center gap-3">
          <SignupButton />
          {!account.address && <LoginButton />}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden text-black"
            >
              <MenuIcon className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="text-black">
            <SheetTitle>
              <VisuallyHidden.Root>Navbar</VisuallyHidden.Root>
            </SheetTitle>
            <SheetDescription>
              <VisuallyHidden.Root>Mobile Navbar</VisuallyHidden.Root>
            </SheetDescription>
            <div className="flex flex-col sm:hidden gap-3">
              <SignupButton />
              {!account.address && <LoginButton />}
            </div>
            <div className="grid gap-4 py-4">
              <SheetTrigger asChild>
                <NavLink to={"/"} className={linkClass}>
                  <p className="text-lg font-medium pointer hover:text-accent transition-colors">
                    Home
                  </p>
                </NavLink>
              </SheetTrigger>
              <SheetTrigger asChild>
                <NavLink to={"/events"} className={linkClass}>
                  <p className="text-lg font-medium pointer hover:text-accent transition-colors">
                    Events
                  </p>
                </NavLink>
              </SheetTrigger>
              <SheetTrigger asChild>
                <NavLink to={"/mint"} className={linkClass}>
                  <p className="text-lg font-medium pointer hover:text-accent transition-colors">
                    Mint Ticket
                  </p>
                </NavLink>
              </SheetTrigger>
              <SheetTrigger asChild>
                <NavLink to={"/tickets"} className={linkClass}>
                  <p className="text-lg font-medium pointer hover:text-accent transition-colors">
                    My Tickets
                  </p>
                </NavLink>
              </SheetTrigger>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
