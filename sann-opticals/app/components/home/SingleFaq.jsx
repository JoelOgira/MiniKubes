import { LuBadgePlus, LuBadgeMinus } from 'react-icons/lu'

const SingleFaq = ({ state, setState, number, title, description }) => {
    return (
        <div className="flex flex-col space-y-4">
            <div onClick={() => setState(!state)} className="flex justify-between space-x-10 items-center border-b cursor-pointer font-semibold">
                <div className="flex space-x-3 items-center">
                    <p className={`${state ? 'text-black bg-white' : 'bg-lightRed text-white'} border-x p-3 border-t text-md md:text-lg`}>{number}</p>
                    <p className={`${state ? 'text-black' : 'text-lightRed'}  text-md md:text-lg`}>{title}</p>
                </div>
                <div className={` ${state ? 'text-black' : 'text-lightRed'} flex items-center`}>{state ? <p className="border-black"><LuBadgePlus className='text-xl' /></p> : <p className="border-lightRed"><LuBadgeMinus className='text-xl' /></p>}</div>
            </div>

            <div className="pl-14">
                <p className={`${state ? 'hidden' : 'block'} text-[#666666] max-w-lg`}>{description}</p>
            </div>
        </div>
    )
}

export default SingleFaq