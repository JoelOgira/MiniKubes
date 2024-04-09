
const ButtonExternal = ({ href, title }) => {
    return (
        <div className="flex justify-center md:items-start md:justify-start">
            <button className='bg-secondary px-6 py-2 rounded text-white hover:text-tertiary hover:scale-105 hover:ease-in-out hover:duration-200'>
                <a href={`${href}`} target='_blank' rel="noreferrer">
                    {title}
                </a>
            </button>
        </div>
    )
}

export default ButtonExternal