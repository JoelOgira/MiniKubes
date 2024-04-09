
const Button = ({ action, title }) => {
    return (
        <div className="flex justify-center font-semibold md:items-start md:justify-start">
            <button
                className='bg-brightRed px-6 py-2 rounded text-white hover:scale-105 hover:ease-in-out hover:duration-200'
                onClick={action}
            >
                {title}
            </button>
        </div>
    )
}

export default Button