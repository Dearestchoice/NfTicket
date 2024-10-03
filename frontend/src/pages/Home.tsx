import Community from "@/components/Home/Community"
import UpcomingEvents from "@/components/Home/Events"
import Hero from "@/components/Home/Hero"
import Works from "@/components/Home/Works"

const HomePage = () => {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <Works />
      <Community />
    </>
  )
}

export default HomePage