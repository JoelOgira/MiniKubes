import Insurance from "./components/home/Insurance"
import EmblaCarousel from "./components/home/EmblaCarousel"
import ServicesSnippet from "./components/home/ServicesSnippet"
import Appointment from "./components/home/Appointment"
import Catalog from "./components/home/Catalog"
import Showcase from "./components/home/Showcase"

export default function Home() {
  return (
    <main >
      <EmblaCarousel />
      <Catalog />
      <ServicesSnippet />
      <Showcase />
      <Appointment />
      <Insurance />
    </main>
  )
}
