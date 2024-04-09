import AppointmentForm from "./AppointmentForm"
import Faq from "./Faq"

const Appointment = () => {
    return (
        <section className='w-full bg-white py-24'>
            <div className="flex flex-col space-y-12 px-4 lg:flex-row lg:space-y-0 xl:px-72">
                <div className=" grid items-center lg:w-1/2 lg:pr-12 ">
                    <Faq />
                </div>

                <div className=" grid items-center lg:w-1/2 ">
                    <AppointmentForm />
                </div>
            </div>
        </section>
    )
}

export default Appointment