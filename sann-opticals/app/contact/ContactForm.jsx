"use client"

import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ButtonSubmit from '../components/ButtonSubmit'
// import emailjs from '@emailjs/browser'

const ContactForm = () => {
    // const serviceId = 'service_l8884vh';
    // const templateId = 'template_igrw7mg';
    // const publicKey = 'nvaDyrzZ-1b--8sls'; 

    const schema = object({
        name: string().required('Please Enter Your Name'),
        email: string().email('Enter a Valid Email').required('Enter a Valid Email'),
        subject: string().required('Enter Subject'),
        message: string().required('Write us a Message'),
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
            <h3 className="pb-6 capitalize text-2xl text-tertiary font-semibold lg:text-5xl lg:pb-8">
                Send us a message
            </h3>
            <form onSubmit={handleSubmit(sendEmail)} className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-1">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        className="bg-lightGrey p-4 focus:outline-none focus:bg-transparent focus:border focus:border-lightGbg-lightGrey rounded"
                        {...register('name')}
                    />
                    {errors.name && (
                        <p className="text-lightRed">{errors.name?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="bg-lightGrey p-4 focus:outline-none focus:bg-transparent focus:border focus:border-lightGbg-lightGrey rounded"
                        {...register('email')}
                    />
                    {errors.email && (
                        <p className="text-lightRed">{errors.email?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="bg-lightGrey p-4 focus:outline-none focus:bg-transparent focus:border focus:border-lightGbg-lightGrey rounded"
                        {...register('subject')}
                    />
                    {errors.subject && (
                        <p className="text-lightRed">{errors.subject?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <textarea
                        cols="30"
                        rows="6"
                        name="message"
                        placeholder="Message"
                        className="bg-lightGrey p-4 focus:outline-none focus:bg-transparent focus:border focus:border-lightGbg-lightGrey rounded"
                        {...register('message')}
                    ></textarea>
                    {errors.message && (
                        <p className="text-lightRed">{errors.message?.message}</p>
                    )}
                </div>
                <ButtonSubmit type={'submit'} title={'Send Message'} />
            </form>
        </>
    );
};

export default ContactForm;

