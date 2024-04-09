"use client"
/* eslint-disable react/no-unescaped-entities */

import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import scroll1 from '../../../public/Scroll_1.webp'
import scroll2 from '../../../public/Scroll_2.png'
import scroll3 from '../../../public/Scroll_3.webp'
import scroll5 from '../../../public/Scroll_5.webp'
import SingleShowcase from './SingleShowcase'

export default function Showcase() {

    const autoplayOptions = {
        delay: 5000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }

    const [ emblaRef ] = useEmblaCarousel({ loop: true }, [ AutoPlay(autoplayOptions) ])

    return (
        <section className='w-full bg-gradient-to-tl from-blue-200 via-blue-100 to-blue-200 py-20 px-4 md:px-8 md:py-28 xl:px-72'>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">

                    <SingleShowcase
                        title={'An easy way to choose the perfect lenses for your frame!'}
                        description={'Visit us in any of our locations today in order to receive guidance from our experts about the most suitable lens for you.'}
                        img={scroll1}
                    />

                    <SingleShowcase
                        title={'For every vision need'}
                        description={"Whether you're nearsighted or farsighted we have quality lenses to suit you needs. You can choose blue-violet light filter for digital devices, light adaptive lenses and thin option for strong prescriptions."}
                        img={scroll2}
                    />

                    <SingleShowcase
                        title={"Let us guide you"}
                        description={"We'll recommend the right lens for you based on your prescription and reach out directly to verify any information you provide. You can also chat with our lens experts whenever your need."}
                        img={scroll3}
                    />

                    <SingleShowcase
                        title={"100% satisfaction guaranteed!"}
                        description={"Need to adjust your glasses? No problem. you can get fittings and adjustments in all of our locations. Your glasses will be attended to by professionals and when done with them, they will be as good as new."}
                        img={scroll5}
                    />

                </div>
            </div>

        </section>
    )
}
