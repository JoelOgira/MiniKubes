import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'

const roboto = Roboto_Condensed({ subsets: [ 'latin' ] })

export const metadata = {
  title: 'Babs Optical',
  description: "The best and most affordable optical shop in Oyugis.  Your premier destination for top-quality eyewear. Experience unparalleled service, an extensive range of eyeglasses, and expert vision care.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}