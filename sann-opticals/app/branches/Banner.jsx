/* eslint-disable react/no-unescaped-entities */
const Banner = ({ location }) => {
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="animateTop grid items-center px-4 md:w-1/2 lg:pl-12">
                <div className="flex flex-col py-8 space-y-5">
                    <h1 className="text-3xl tracking-wide font-semibold lg:text-6xl">
                        <span>{location}</span>
                        <span className="text-primary px-3">Branch</span>
                    </h1>
                    <p className="text-gray-600 text-justify md:max-w-md md:pr-7 lg:max-w-3xl ">
                        Whether you're seeking trendy frames or specialized vision aids, our services are designed to meet your expectations. Get in touch with our optical specialists today and let us help you discover the ideal optical solutions for your lifestyle.
                    </p>
                </div>
            </div>

            <div className="animateBottom h-[350px] md:h-[400px] md:w-1/2">
                <div className="services-banner">

                </div>
            </div>
        </div>
    )
}

export default Banner