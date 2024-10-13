import { useAccount } from "wagmi";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { NavLink, Link } from "react-router-dom";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/button";

import SignupButton from "./SignupButton";
import { MenuIcon } from "./Icons";
import ConnectButton from "./ConnectButton";

const linkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? "text-white" : "text-[#878787]";
};

const mobileLinkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? "!text-white !bg-transparent" : "text-[#878787]";
};

const Navbar = () => {
  const account = useAccount();

  return (
    <nav className="flex gap-2 items-center justify-between px-4 sm:px-6 lg:px-8 py-2 md:py-4">
      <Link to={"/"} className="flex items-center gap-2">
        <img src="/images/nfticket.webp" alt="" className="h-12 " />
      </Link>
      <ul className="hidden lg:flex list-none gap-6 xl:gap-10 items-center justify-between font-medium font-poppins text-lg xl:text-xl">
        <NavLink to={"/"} className={linkClass}>
          <li className="pointer">Home</li>
        </NavLink>
        <NavLink to={"/events"} className={linkClass}>
          <li className="pointer">Events</li>
        </NavLink>
        <NavLink to={"/create"} className={linkClass}>
          <li className="pointer">Create Event</li>
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
          {!account.address ? <ConnectButton /> : <SignupButton />}
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
          <SheetContent
            side="right"
            className="text-[#878787] font-poppins px-4 bg-[#1b1b1b] text-center"
          >
            <SheetTitle>
              <VisuallyHidden.Root>Navbar</VisuallyHidden.Root>
            </SheetTitle>
            <SheetDescription>
              <VisuallyHidden.Root>Mobile Navbar</VisuallyHidden.Root>
            </SheetDescription>
            <div className="flex justify-center sm:hidden gap-3 my-4">
              {!account.address ? <ConnectButton /> : <SignupButton />}
            </div>
            <div className="grid gap-4 py-4">
              <NavLink to={"/"} className={mobileLinkClass}>
                <SheetTrigger asChild>
                  <p className="text-lg font-medium pointer">Home</p>
                </SheetTrigger>
              </NavLink>
              <NavLink to={"/events"} className={mobileLinkClass}>
                <SheetTrigger asChild>
                  <p className="text-lg font-medium pointer">Events</p>
                </SheetTrigger>
              </NavLink>
              <NavLink to={"/create"} className={mobileLinkClass}>
                <SheetTrigger asChild>
                  <p className="text-lg font-medium pointer">Create Event</p>
                </SheetTrigger>
              </NavLink>
              <NavLink to={"/mint"} className={mobileLinkClass}>
                <SheetTrigger asChild>
                  <p className="text-lg font-medium pointer">Mint Ticket</p>
                </SheetTrigger>
              </NavLink>
              <NavLink to={"/tickets"} className={mobileLinkClass}>
                <SheetTrigger asChild>
                  <p className="text-lg font-medium pointer">My Tickets</p>
                </SheetTrigger>
              </NavLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
