import LatestPostItem from './LatestPostItem'

const LatestPost = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full my-5">
            <h2 className="flex justify-center items-center w-[90%] h-[50px] text-[#222222] text-[1.3rem] font-[600] border border-[#f6986b] rounded-[30px]">
                Latest Post
            </h2>
            <ul className="flex flex-col justify-center items-start w-[80%] my-4">
                <LatestPostItem
                    UserImg="https://html.merku.love/shelly/assets/img/post1.png"
                    Title="Duis tempor eros tortor, a ornare"
                    PostDate="17/09/2020"
                />
                <LatestPostItem
                    UserImg="https://html.merku.love/shelly/assets/img/post2.png"
                    Title="Duis tempor eros tortor, a ornare"
                    PostDate="17/09/2020"
                />
                <LatestPostItem
                    UserImg="https://html.merku.love/shelly/assets/img/post3.png"
                    Title="Duis tempor eros tortor, a ornare"
                    PostDate="17/09/2020"
                />
            </ul>
        </div>
    )
}

export default LatestPost
