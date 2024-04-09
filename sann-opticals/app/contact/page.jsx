import Banner from './Banner'
import Locations from './Locations'
import Message from './Message'

export const metadata = {
    title: 'Sann Opicals Limited | Contact',
    description: 'Contact us for any queries you may have about our optical shop and we will get back to you as soon as possible.'
}

export default function page() {
    return (
        <main className='w-full'>
            <Banner />
            <Locations />
            <Message />
        </main>
    )
}
