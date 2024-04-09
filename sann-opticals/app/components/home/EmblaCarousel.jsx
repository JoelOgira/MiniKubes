"use client"
/* eslint-disable react/no-unescaped-entities */

import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import ButtonInternal from '../ButtonInternal'

export default function EmblaCarousel() {

    const autoplayOptions = {
        delay: 6000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }

    const [ emblaRef ] = useEmblaCarousel({ loop: true }, [ AutoPlay(autoplayOptions) ])

    return (
        <section className='flex flex-col-reverse pb-16 md:flex-row lg:pb-0'>

            <div className="animateLeft grid items-center px-4 md:w-1/2 lg:pl-12">
                <div className="py-8">
                    <h1 className="text-3xl pb-6 font-semibold lg:text-6xl">
                        Sann<span className="text-primary md:px-3"> Opticals </span> Limited
                    </h1>

                    <h2 className='text-xl pb-6 font-semibold text-gray-900'>The best and most affordable optical shop in Mombasa and it's environs</h2>

                    <p className="text-gray-900 pb-6 leading-[1.8rem] md:max-w-md lg:max-w-2xl">
                        Your premier destination for top-quality eyewear. Experience unparalleled service, an extensive range of eyeglasses, and expert vision care.
                    </p>

                    <p className="text-gray-700 pb-10 leading-[1.8rem] md:max-w-md lg:max-w-2xl">
                        At Sann Opticals Limited, our commitment revolves around offering patients a welcoming environment paired with top-notch eye care services.
                    </p>

                    <ButtonInternal href={'/services'} title={'Explore Our  Services'} />

                </div>
            </div>

            <div className="h-[358px] sm:h-[338px] md:w-1/2 md:h-[470px] lg:h-[506px]">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">

                        <div className="flex-shrink-0 flex-grow-0 w-full h-[358px] sm:h-[338px] md:h-[470px] lg:h-[506px]">
                            <div className="slider1">

                            </div>
                        </div>

                        <div className="flex-shrink-0 flex-grow-0 w-full h-[358px] sm:h-[338px] md:h-[470px] lg:h-[506px]">
                            <div className="slider2">

                            </div>
                        </div>

                        <div className="flex-shrink-0 flex-grow-0 w-full h-[358px] sm:h-[338px] md:h-[470px] lg:h-[506px]">
                            <div className="slider3">

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
