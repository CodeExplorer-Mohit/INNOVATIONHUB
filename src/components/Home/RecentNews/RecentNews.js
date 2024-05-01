import RecentNewsItem from './RecentNewsItem'

const RecentNews = () => {
    const itemOne =
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3Nob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    const itemTwo =
        'https://img.freepik.com/free-photo/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime_146671-16288.jpg?size=626&ext=jpg&ga=GA1.2.752899476.1643652214&semt=ais'
    const itemThree =
        'https://img.freepik.com/free-photo/entrepreneurs-meeting-office_23-2148898688.jpg?size=626&ext=jpg&ga=GA1.2.752899476.1643652214&semt=ais'

    return (
        <section className="flex justify-center items-center w-[100%] min-h-[50%] py-10">
            <div className="flex flex-col justify-center items-center w-[80%] h-full py-2">
                <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-[3.2rem] text-[#2B2B2B] font-[800] my-2">
                        Recent News
                    </h2>
                    <p className="text-[#555555] w-[45%] text-center my-2">
                        Nam mattis felis id sodales rutrum. Nulla ornare
                        tristique mauris, a laoreet erat ornare sit amet. Nulla
                        sagittis faucibus lacusMorbi lorem sem, aliquet
                    </p>
                </div>
                <div className="flex justify-center items-center w-full my-5">
                    <RecentNewsItem imgSrc={itemOne} />
                    <RecentNewsItem imgSrc={itemTwo} />
                    <RecentNewsItem imgSrc={itemThree} />
                </div>
            </div>
        </section>
    )
}

export default RecentNews
