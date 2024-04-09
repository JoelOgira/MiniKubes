import Image from 'next/image'

const SingleShowcase = ({ title, description, img }) => {
    return (
        <div className="flex-shrink-0 flex-grow-0 w-full">
            <div className="flex flex-col-reverse md:flex-row md:space-x-8">
                <div className="grid items-center md:w-1/2">
                    <div className="animateLeft flex flex-col justify-center items-center space-y-7 text-center md:justify-start md:items-start md:text-start">
                        <h3 className='max-w-xs font-semibold text-4xl text-center md:max-w-xl md:text-start lg:text-7xl'>{title}</h3>

                        <p className='leading-8 text-gray-700 lg:max-w-md'>{description}</p>
                    </div>
                </div>

                <div className="grid items-center justify-center pb-16 md:w-1/2 md:pb-0">
                    <Image
                        src={img}
                        alt='Lens'
                        className='max-w-[300px] max-h-[280px] xl:h-[350px]'
                    />
                </div>
            </div>
        </div>
    )
}

export default SingleShowcase