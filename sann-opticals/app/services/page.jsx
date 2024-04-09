import Banner from "./Banner"
import EyeExam from "./EyeExam"

export const metadata = {
    title: 'Sann Opticals Limited | Services ',
    description: 'Explore our services.',
}

const Services = () => {
    return (
        <main>
            <Banner />
            <hr />
            <EyeExam />
        </main>
    )
}

export default Services