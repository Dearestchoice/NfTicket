import { useAccount } from "wagmi"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "../ui/sheet"
import { Button } from "../ui/button"

import LoginButton from "./LoginButton"
import SignupButton from "./SignupButton"
import { MenuIcon } from "./Icons"

const Navbar = () => {
  const account = useAccount()

  return (
    <nav className="flex gap-2 items-center justify-between px-2 sm:px-4 md:px-6 py-2 md:py-4">
      <div className="flex items-center gap-2">
        <img src="/images/nfticket.webp" alt="" className="h-12 " />
      </div>
      <ul className="hidden lg:flex list-none gap-6 xl:gap-10 items-center justify-between font-medium font-poppins text-lg xl:text-xl">
        <li className="pointer">
          Home
        </li>
        <li className="pointer">
          Events
        </li>
        <li className="pointer">
          Mint Ticket
        </li>
        <li className="pointer">
          My Tickets
        </li>
        <li className="pointer">
          Marketplace
        </li>
      </ul>
      <div className="flex gap-2 sm:gap-4 items-center">
        <div className="flex items-center gap-3">
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
            <div className="grid gap-4 p-4">
              <SheetTrigger asChild>
                <p className="flex items-center gap-2 text-lg font-medium pointer hover:text-accent transition-colors">
                  Home
                </p>
              </SheetTrigger>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar