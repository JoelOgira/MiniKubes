"use client"

import { useEffect } from "react"
import Button from "./Button"
import ButtonInternal from "./ButtonInternal"

export default function ErrorState({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [ error ])

    return (
        <main className="min-h-screen grid justify-center items-center">
            <div className="flex flex-col space-y-4">
                <h2 className="text-4xl font-bold">Ooops! Something went wrong :)</h2>
                <div className="flex justify-between items-center">
                    <Button action={() => reset()} title={'Try Again'} />
                    <p className="text-3xl font-bold">OR</p>
                    <ButtonInternal href={'/'} title={'Go Back Home'} />
                </div>
            </div>
        </main>
    )
}
