import { IoGlasses } from 'react-icons/io5'
import { GiSunglasses } from 'react-icons/gi'
import { TbDeviceImacHeart } from 'react-icons/tb'
import { FaEyeSlash } from 'react-icons/fa6'
import SingleService from './SingleService'
import ButtonInternal from '../ButtonInternal'

const ServicesSnippet = () => {
    return (
        <section className="bg-lightGrey px-4 py-24 w-full lg:px-32 2xl:px-72">
            <div className="flex flex-col space-y-12">

                <div className="flex flex-col space-y-4 text-center">
                    <h2 className='text-primary text-lg font-semibold'>All our services are geared towards a single objective:</h2>
                    <h3 className='font-bold text-4xl md:text-5xl tracking-wider'>Helping people see clearly</h3>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10">

                    <SingleService icon={< TbDeviceImacHeart />} title={'Computerized eye Examination'} description={'Experience precision and accuracy with our state-of-the-art computerized eye examination services. Discover personalized care and detailed insights into your eye health with our advanced technology.'} />

                    <SingleService icon={< GiSunglasses />} title={'Prescription of Glasses'} description={'Explore a wide range of customizable options to suit your vision needs. Our expert opticians ensure precise prescriptions for optimal vision clarity.'} />

                    <SingleService icon={< FaEyeSlash />} title={'Low Vision Aid'} description={'Discover specialized aids tailored for your visual needs, crafted to enhance your daily experiences. Find the perfect solution to improve your vision and independence in your everyday life.'} />

                    <SingleService icon={< IoGlasses />} title={'Designer Sunglasses'} description={'We offer quality sunglasses at unbeatable prices. Visit our store near you today to get yours'} />

                </div>

                <ButtonInternal href={'/services'} title={'More Services'} />

            </div>
        </section>
    )
}

export default ServicesSnippet