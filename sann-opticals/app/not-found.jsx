/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

const NotFound = () => {
    return (
        <main className='min-h-screen grid justify-center items-center text-center px-4 lg:px-12'>
            <div className="flex flex-col space-y-5">
                <h1 className='text-3xl font-bold'>We're Sorry :) <br /> The page you were looking for could not be found.</h1>
                <p className='text-lg'>Go back to the <Link href={'/'} className='underline text-primary'>Homepage</Link> </p>
            </div>
        </main>
    )
}

export default NotFound