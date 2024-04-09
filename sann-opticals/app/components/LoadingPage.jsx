"use client"

import CircleLoader from 'react-spinners/CircleLoader'

const LoadingPage = () => {

    return (
        <main className="min-h-screen grid justify-center items-center">
            <CircleLoader
                size={150}
                color={'#ec4949'}
                loading={true}
            />
        </main>
    )
}

export default LoadingPage