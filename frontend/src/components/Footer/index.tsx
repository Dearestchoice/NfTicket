import { DiscordIcon, InstagramIcon, XIcon } from "./Icons"

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-4 bg-[#111111] font-poppins font-medium">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mx-auto">
        <p> &copy; Copyright {new Date().getFullYear()} - NFTicket.</p>
        <div className="flex gap-4 md:gap-6 items-center justify-end">
          <DiscordIcon />
          <XIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  )
}

export default Footer