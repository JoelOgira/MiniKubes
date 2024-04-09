"use client"

import { useState } from 'react'
import { MdLocalPhone } from 'react-icons/md'

const ButtonCarousel = () => {
    const [ clicked, setClicked ] = useState(false)

    const handleClicked = () => {
        setClicked(!clicked)
    }

    return (
        <div className="flex justify-center md:items-start md:justify-start">
            <button
                className='bg-brightRed font-semibold
                px-6 py-2 rounded text-white hover:text-tertiary 
                hover:scale-105 hover:ease-in-out hover:duration-200'
                onClick={handleClicked}
            >
                {clicked
                    ? <span>Call Us Today To Book Appointment</span>
                    : <span className="flex items-center space-x-3"> <><MdLocalPhone /></> <>+254798197598</> </span>
                }
            </button>
        </div>
    )
}

export default ButtonCarousel