import { MdEmail, MdLocalPhone, MdLocationOn, MdFacebook } from 'react-icons/md'
import Link from 'next/link'
import { locations } from '../contact/import'

const Footer = () => {

  const thisYear = new Date().getFullYear()

  return (
    <footer className="top-full sticky">
      <div className="flex flex-col lg:flex-row text-white">

        <div className="bg-deepBlue px-4 py-10 lg:px-12 lg:w-1/3 lg:py-20">
          <div className="">
            <h4 className="text-2xl font-bold pb-6">
              Sann Opticals limited
            </h4>

            <div className="flex flex-col space-y-5">
              <p className="flex space-x-3">
                <span> <MdLocalPhone className='text-xl' /> </span>
                <span className="flex flex-col space-y-2">
                  {(locations || []).map(location => (
                    <span key={location.id} className="flex items-center" >{location?.title} -- {location?.tel}</span>
                  ))}
                </span>
              </p>

              <p className="flex space-x-3 items-center">
                <span> <MdEmail className='text-xl' /> </span>
                <span>
                  sannopticals@gmail.com
                </span>
              </p>

              <p className="flex space-x-3 items-center">
                <span> <MdLocationOn className='text-xl' /> </span>
                <span>
                  Box 42825 - 80100 Digo Rd, Mombasa
                </span>
              </p>
            </div>
          </div>

        </div>

        <div className="bg-black [&>div]:px-4  py-10 lg:w-2/3 lg:py-20 lg:px-12">
          <div className="">
            <div className="grid grid-cols gap-y-10 pb-8 [&>div]:flex [&>div]:flex-col md:grid-cols-3 md:gap-y-0 lg:pb-12">
              <div className='flex flex-col space-y-3'>
                <path className='text-xl font-semibold pb-4'>Our company</path>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/services'}>Services</Link>
                <Link href={'/contact'}>Contact</Link>
              </div>

              <div className='flex flex-col space-y-3'>
                <p className='text-xl font-semibold pb-4' >Our Services</p>
                <Link href={'/services'}>Eye Exam</Link>
                <Link href={'/services'}>Glass Prescription</Link>
                <Link href={'/services'}>Low vision aid</Link>
                <Link href={'/services'}>Sunglasses</Link>
              </div>

              <div className='flex flex-col space-y-3'>
                <p className='text-xl font-semibold pb-4' >Social Links</p>
                <p>Follow Us</p>
                <Link className='flex flex-row items-center space-x-4' href={'https://www.facebook.com/people/SANN-Opticals/100057699240184/'} target='_blank'> <span>Facebook</span> <span><MdFacebook className='text-xl text-deepBlue' /></span> </Link>
              </div>
            </div>
          </div>

          <hr className=' border-gray-400 w-full' />

          <div className="top-full sticky pt-6 text-gray-400 text-center ">
            <p>Copyright &copy; Sann Opticals Limited {thisYear}</p>
          </div>

        </div>
      </div>


    </footer >
  )
}

export default Footer