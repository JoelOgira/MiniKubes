"use client"

import { useState } from "react";
import SingleFaq from "./SingleFaq";

const Faq = () => {

    const [ isHidden, setIsHidden ] = useState(true)
    const [ isHidden1, setIsHidden1 ] = useState(true)
    const [ isHidden2, setIsHidden2 ] = useState(true)
    const [ isHidden3, setIsHidden3 ] = useState(true)

    return (
        <>
            <div className="flex flex-col space-y-16">
                <div className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-lightRed font-bold font-poppins text-xl">General Query</h3>
                        <h2 className="font-bold text-3xl max-w-md md:text-4xl md:max-w-xl tracking-wider">Get all your answers here.</h2>
                    </div>
                    <p className="max-w-2xl md:max-w-xl">
                        Experience the difference as we dedicate ourselves to promoting eye health and enhancing vision in a friendly setting conducive to your well-being.
                    </p>
                </div>

                <div className="flex flex-col space-y-8">

                    <SingleFaq
                        state={isHidden}
                        setState={setIsHidden}
                        number={"01."}
                        title={"What is a comprehensive eye examination?"}
                        description={"A comprehensive or full eye examination evaluates more than just your vision- it also checks for common eye conditions like glaucoma, cataract, and diabetic retinopathy, along with the overall eye health and visual acuity."}
                    />

                    <SingleFaq
                        state={isHidden1}
                        setState={setIsHidden1}
                        number={"02."}
                        title={"How long does an eye exam take?"}
                        description={"An eye checkup typically takes 30 minutes. The duration of your checkup depends on your symptoms, the tests conducted, your vision history, and any prevalent medical conditions. A routine eye checkup can sometimes be as quick as 15 minutes, while comprehensive checks can take over an hour. The appointment covers assessing the visual acuity, updating prescriptions, suggesting glasses, and looking for any underlying chronic health conditions."}
                    />

                    <SingleFaq
                        state={isHidden2}
                        setState={setIsHidden2}
                        number={"03."}
                        title={"Why do I need an eye exam before buying eyeglasses?"}
                        description={"An eye exam is essential to determine your current prescription and assess the overall health of your eyes. This information helps you choose eyeglasses that meet your specific vision needs and ensures that you protect your eyes effectively."}
                    />

                    <SingleFaq
                        state={isHidden3}
                        setState={setIsHidden3}
                        number={"04."}
                        title={"Does Sann Opticals accept Insurance?"}
                        description={"Yes. We accept a number of insurance covers including NHIF among others. The full list is provided in our insurance section."}
                    />

                </div>
            </div>
        </>
    )
}

export default Faq
