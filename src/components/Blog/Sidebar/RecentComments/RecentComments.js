import RecentPostItem from './RecentPostItem'

const RecentComments = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full my-5">
            <h2 className="flex justify-center items-center w-[90%] h-[50px] text-[#222222] text-[1.3rem] font-[600] border border-[#f6986b] rounded-[30px]">
                Recent Comments
            </h2>
            <ul className="flex flex-col justify-center items-start w-[80%] my-4">
                <RecentPostItem
                    AdminName="Admin"
                    Comment="in tempor eros tortor, a ornare"
                />
                <RecentPostItem
                    AdminName="Admin"
                    Comment="in tempor eros tortor, a ornare"
                />
                <RecentPostItem
                    AdminName="Admin"
                    Comment="in tempor eros tortor, a ornare"
                />
            </ul>
        </div>
    )
}

export default RecentComments
