import Button from '../../../UI/Button/Button'
import BenifitsCardItem from './BenifitsCardItem'

const OurBenifits = () => {
    return (
        <section className="flex justify-center items-center w-[100%] py-10">
            <div className="flex justify-between items-center w-[80%] py-2">
                <div className="flex flex-col justify-center items-start w-1/2">
                    <h2 className="text-[3rem] text-[#2B2B2B] font-[800] my-2 w-[70%] text-left leading-[55px]">
                        Our Benifits
                    </h2>
                    <p className="text-[#555555] w-[80%] text-left mt-2 mb-3">
                        Praesent rhoncus justo erat, sed sollicitudin arcu
                        malesuada vel. Etiam scelerisque justo ut purus luctus
                        ullamcorper. Vivamus vitae elit ligula. Fusce eu rutrum
                        nisl. Vestibulum ut sagittis neque
                    </p>
                    <Button Text="Contacts" />
                </div>
                <div className="flex justify-center items-center w-1/2">
                    <div className="flex flex-col justify-center items-center">
                        <BenifitsCardItem
                            IconLink="https://html.merku.love/shelly/assets/img/icon5.png"
                            Heading="Awesome Teachers"
                            Text="Vivamus interdum, mauris interdum quis curdum sodales"
                        />
                        <BenifitsCardItem
                            IconLink="https://html.merku.love/shelly/assets/img/icon9.png"
                            Heading="Student Support Service"
                            Text="Mauris nec mi fequis ugiat, cursus tortor nec, pharetra tellus"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center translate-y-[20%]">
                        <BenifitsCardItem
                            IconLink="https://html.merku.love/shelly/assets/img/icon7.png"
                            Heading="Global Certificate"
                            Text="Pelleneget tespharetra que fringilla egugue id eget pharetra"
                        />
                        <BenifitsCardItem
                            IconLink="https://html.merku.love/shelly/assets/img/icon8.png"
                            Heading="Best Programm"
                            Text="Etiam risus neque, volutpat vel laoreet a, finibus volutpat non ligula"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurBenifits
