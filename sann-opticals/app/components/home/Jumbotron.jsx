import Image from 'next/image'
import shoppingCart from '../../../public/Shopping_bag.svg'
import tools from '../../../public/tools.svg'
import insurance from '../../../public/insurance.svg'

const Jumbotron = () => {

    const tronData = [
        { id: 1, img: shoppingCart, description: "Shop for your glasses in any of our stores today and get amazing deals." },
        { id: 2, img: tools, description: "Have your existing glasses fitted in any of our stores." },
        { id: 3, img: insurance, description: "We accept a number of insurance covers for your glasses." }
    ]

    return (
        <div className='w-full flex items-center justify-between space-x-8 px-4 py-3 sm:space-x-4 lg:px-24'>
            {tronData.map(data => (
                <div key={data.id} className="flex flex-col space-y-1">
                    <Image
                        src={data.img}
                        alt={data.img.toString()}
                    />
                    <p className='max-w-xs text-sm text-gray-800 sm:pr-5 lg:pr-0' >{data.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Jumbotron