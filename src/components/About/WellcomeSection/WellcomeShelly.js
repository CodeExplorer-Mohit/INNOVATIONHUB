import Button from '../../../UI/Button/Button'

const WellcomeShelly = () => {
    return (
        <section className="flex justify-center items-center w-[100%] py-10">
            <div className="flex justify-between items-center w-[80%] py-2">
                <div className="flex flex-col justify-center items-start w-1/2">
                    <h2 className="text-[3rem] text-[#2B2B2B] font-[800] my-2 w-[70%] text-left leading-[55px]">
                        Welcome to{' '}
                        <span className="text-[#F37335]">Shelly</span> School
                    </h2>
                    <p className="text-[#555555] w-[90%] text-left mt-2 mb-3">
                        Morbi vel augue et metus pellentesque lacinia eu non
                        odio. Sed id purus urna. Maecenas ultrices ligula a nisi
                        dictum tristique. Suspendisse potenti. Curabitur egestas
                        ultrices sem, eu vestibulum leo sagittis et.
                    </p>
                    <Button Text="Classes" />
                </div>
                <div className="flex justify-center items-start w-1/2">
                    <img
                        src="https://html.merku.love/shelly/assets/img/abt1.png"
                        alt="img"
                        className=""
                    />
                </div>
            </div>
        </section>
    )
}

export default WellcomeShelly
