"use client"

import { useForm } from 'react-hook-form'
import { object, string, number, date } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ButtonSubmit from '../ButtonSubmit'
// import * as yup from 'yup'
// import emailjs from '@emailjs/browser'

const AppointmentForm = () => {
    // const serviceId = 'service_l8884vh';
    // const templateId = 'template_igrw7mg';
    // const publicKey = 'nvaDyrzZ-1b--8sls'; 

    const schema = object({
        name: string().required('Please Enter Your Name'),
        email: string().email('Enter a Valid Email').required('Enter a Valid Email'),
        phone: number().required('Enter a valid phone number'),
        service: string().required('Choose a Service'),
        other: string(),
        date: date("Enter correct date"),
        location: string().required('Choose a Location'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const sendEmail = () => {
        reset()
    }

    // const sendEmail = (data) => {
    //     const { name, email, subject, message } = data;
    //     const templateParams = {
    //         from_name: name,
    //         from_email: email,
    //         to_name: 'Oyugis East SDA Church',
    //         subject: subject,
    //         message: message,
    //     };

    //     emailjs
    //         .send(serviceId, templateId, templateParams, publicKey)
    //         .then((response) => {
    //             console.log('Email sent successfully', response);
    //             reset();
    //         })
    //         .catch((error) => {
    //             console.log('Error sending message', error);
    //         });
    // };

    return (
        <>
            <h3 className="pb-6 capitalize font-bold text-3xl max-w-md md:text-4xl md:max-w-full tracking-wider lg:pb-8">
                Book an Appointment with Us Today.
            </h3>
            <form onSubmit={handleSubmit(sendEmail)} className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-1">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        className="bg-[#F5F9F9] p-4 focus:outline-none focus:bg-transparent focus:border focus:border-[#F5F9F9] rounded"
                        {...register('name')}
                    />
                    {errors.name && (
                        <p className="text-lightRed">{errors.name?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        className="bg-[#F5F9F9] p-4 focus:outline-none focus:bg-transparent focus:border focus:border-[#F5F9F9] rounded"
                        {...register('phone')}
                    />
                    {errors.phone && (
                        <p className="text-lightRed">{errors.phone?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        Write us a Message className="bg-[#F5F9F9] p-4 focus:outline-none focus:bg-transparent focus:border focus:border-[#F5F9F9] rounded"
                        {...register('email')}
                    />
                    {errors.email && (
                        <p className="text-lightRed">{errors.email?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <select
                        name="service"
                        className="bg-[#F5F9F9] p-4 focus:outline-none focus:bg-transparent focus:border focus:border-[#F5F9F9] rounded"
                        {...register('service')}
                    >
                        <option value="">Choose a service</option>
                        <option value="Computerized eye checkup">Computerized eye checkup</option>
                        <option value="Prescription glasses">Prescription glasses</option>
                        <option value="Low vision aid">Low vision aid</option>
                        <option value="Designer glasses">Designer glasses</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.service && (
                        <p className="text-lightRed">{errors.service?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <textarea
                        cols="30"
                        rows="3"
                        name="other"
                        placeholder="If other... Please specify your desired service"
                        className="bg-[#F5F9F9] p-4 focus:outline-none focus:bg-transparent focus:border focus:border-[#F5F9F9] rounded"
                        {...register('other')}
                    ></textarea>
                </div>

                <div className="flex flex-col space-y-1">
                    <select
                        name="location"
                        className="bg-[#F5F9F9] p-4 focus:outline-none focus:bg-transparent focus:border focus:border-[#F5F9F9] rounded"
                        {...register('location')}
                    >
                        <option value="">Choose a location</option>
                        <option value="Mombasa">Mombasa</option>
                        <option value="Taveta">Taveta</option>
                        <option value="Voi">Voi</option>
                        <option value="Hola">Hola</option>
                        <option value="Kilifi">Kilifi</option>
                        <option value="Mpeketoni">Mpeketoni</option>
                    </select>
                    {errors.location && (
                        <p className="text-lightRed">{errors.location?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <input
                        type="date"
                        name="date"
                        placeholder="Choose date"
                        Write us a Message className="bg-[#F5F9F9] p-4 focus:outline-none focus:bg-transparent focus:border focus:border-[#F5F9F9] rounded"
                        {...register('date')}
                    />
                    {errors.date && (
                        <p className="text-lightRed">{errors.date?.message}</p>
                    )}
                </div>


                <ButtonSubmit type={'submit'} title={'Book Appointment'} />
            </form>
        </>
    );
};

export default AppointmentForm

