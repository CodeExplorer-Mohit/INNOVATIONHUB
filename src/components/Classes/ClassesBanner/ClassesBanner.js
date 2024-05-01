import Button from '../../../UI/Button/Button'

const ClassesBanner = () => {
    const OnClickHandler = () => {}
    return (
        <section className="flex justify-center items-center w-[100%] h-[90vh]">
            <div className="flex justify-center items-center w-[80%] h-[54.6vh] bg-[url('https://html.merku.love/shelly/assets/img/classes-banner.jpg')] bg-no-repeat relative">
                <div className="flex flex-col justify-center items-start w-[90%] relative z-[3]">
                    <p className="text-[#F37335] text-[.9rem] font-[600]">
                        TRY NOW
                    </p>
                    <h3 className="text-[#333333] text-[3.6rem] font-[500]">
                        Start Investing in You
                    </h3>
                    <Button Text="Classes" OnBtnClick={OnClickHandler} />
                </div>
                <div
                    className="absolute top-0 left-0 w-[100%] h-[100%] opacity-[.3] z-[2]"
                    style={{ background: 'linear-gradient(409deg,#fff,#fff)' }}
                ></div>
            </div>
        </section>
    )
}

export default ClassesBanner
