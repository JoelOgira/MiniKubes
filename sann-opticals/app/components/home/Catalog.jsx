"use client"

import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { glassCatalog, sunglassCatalog } from "./imports";
import Image from 'next/image';
import Jumbotron from "./Jumbotron";

const Catalog = () => {
    const [ hoveredImages, setHoveredImages ] = useState({});
    const [ hoveredSunglassImages, setHoveredSunglassImages ] = useState({});

    const toggleImage = (id) => {
        setHoveredImages(prevState => ({
            ...prevState,
            [ id ]: !prevState[ id ]
        }));
    };

    const toggleSunglassImage = (id) => {
        setHoveredSunglassImages(prevState => ({
            ...prevState,
            [ id ]: !prevState[ id ]
        }));
    };

    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 300;
    };

    const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 300;
    };

    return (
        <section className="w-full py-20 flex flex-col space-y-16 bg-white">

            <Jumbotron />

            <div className="flex flex-col space-y-8">
                <h2 className="px-4 text-center text-gray-700 font-semibold text-xl sm:text-2xl md:text-start md:text-4xl lg:px-12">Explore Our Glasses Collection</h2>
                <div className="relative flex items-center">
                    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                    <div id="slider" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth'>
                        {(glassCatalog || []).map((glass) => (
                            <div key={glass?.id} className="inline-block ease-in-out duration-300 px-2 max-w-[212px] sm:max-w-[340px] lg:max-w-[467px] ">
                                <div
                                    onMouseEnter={() => toggleImage(glass.id)}
                                    onMouseLeave={() => toggleImage(glass.id)}
                                    onClick={() => toggleImage(glass.id)}
                                    className="bg-catalogBg py-16 flex items-center justify-center"
                                >
                                    <Image
                                        loading='lazy'
                                        src={hoveredImages[ glass.id ] ? glass.img[ 1 ] : glass.img[ 0 ]}
                                        alt={glass?.title}
                                        className='max-w-full'
                                        placeholder='blur'
                                    />
                                </div>
                                <p className="text-black pt-2 font-semibold">{glass?.title}</p>
                            </div>
                        ))}
                    </div>
                    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
                </div>
            </div>

            <div className="flex flex-col space-y-8">
                <h2 className="px-4 text-center text-gray-700 font-semibold text-xl sm:text-2xl md:text-start md:text-4xl lg:px-12">Explore Our Sunglasses Collection</h2>
                <div className="relative flex items-center">
                    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                    <div id="slider" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth'>
                        {(sunglassCatalog || []).map((glass) => (
                            <div key={glass?.id} className="inline-block ease-in-out duration-300 px-2 max-w-[212px] sm:max-w-[340px] lg:max-w-[467px] ">
                                <div
                                    onMouseEnter={() => toggleSunglassImage(glass.id)}
                                    onMouseLeave={() => toggleSunglassImage(glass.id)}
                                    onClick={() => toggleSunglassImage(glass.id)}
                                    className="bg-catalogBg py-16 flex items-center justify-center"
                                >
                                    <Image
                                        loading='lazy'
                                        src={hoveredSunglassImages[ glass.id ] ? glass.img[ 1 ] : glass.img[ 0 ]}
                                        alt={glass?.title}
                                        className='max-w-full'
                                        placeholder='blur'
                                    />
                                </div>
                                <p className="text-black pt-2 font-semibold">{glass?.title}</p>
                            </div>
                        ))}
                    </div>
                    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
                </div>
            </div>
        </section>
    );
};

export default Catalog;
