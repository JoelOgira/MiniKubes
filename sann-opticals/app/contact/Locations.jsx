import { TbLocationPin } from 'react-icons/tb'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md'
import { GiPostOffice } from 'react-icons/gi'
import { openingTime } from './import'
import { locations } from './import'

const Locations = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-3">
      <div className="bg-[#F5F9F9] py-24 px-4 md:w-2/3 lg:px-12">
        <h2 className="text-primary flex items-center space-x-3 font-semibold pb-5">
          <span> <TbLocationPin className='text-lg' /> </span>
          <span>OUR LOCATION</span>
        </h2>
        <h3 className='font-semibold text-4xl tracking-wide lg:tracking-[.12em]'>
          Sann Opticals Limited. Vision Made Better.
        </h3>

        <div className="grid grid-cols gap-3 pt-8 [&>div]:w-full sm:grid-cols-2">

          {(locations || []).map(location => (
            <div key={location?.id} className="flex flex-col space-y-2 [&>h4]:font-semibold [&>h4]:font-lg [&>p]:text-gray-600 pb-8 [&>p]:max-w-xs border-b">
              <h4>0{location?.id}. {location?.title}</h4>
              <p className='flex items-center space-x-2'>
                <span className='text-brightRed'><MdLocationOn /></span>
                <span>{location?.street}</span>
              </p>
              <p className='flex items-center space-x-2'>
                <span className='text-brightRed'><MdLocalPhone /></span>
                <span>{location?.tel}</span>
              </p>
            </div>
          ))}

        </div>
        <p className="flex space-x-3 items-center pt-5">
          <span> <MdEmail className='text-xl text-brightRed' /> </span>
          <span>
            sannopticals@gmail.com
          </span>
        </p>

        <p className="flex space-x-3 items-center pt-5">
          <span> <GiPostOffice className='text-xl text-brightRed' /> </span>
          <span>
            P.O.Box 42825 - 80100, Mombasa
          </span>
        </p>

      </div>

      <div className="bg-white px-4 py-12 md:w-1/3 md:py-24 lg:px-12">
        <p className="font-semibold font-xl pb-5">
          Opening Hours
        </p>
        <div className="flex flex-col space-y-3">
          {(openingTime || []).map((openTime, index) => (
            <div key={index} className="flex justify-between space-x-6 items-center py-2 border-b">
              <p>{openTime?.Day}</p>
              <p>{openTime?.Time}</p>
            </div>
          ))}
          <p className='text-red-400 pt-3'>Closed on Sunday and Public Holidays</p>
        </div>
      </div>
    </div>
  )
}

export default Locations