import TagItem from './TagItem'

const Tags = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full my-5">
            <h2 className="flex justify-center items-center w-[90%] h-[50px] text-[#222222] text-[1.3rem] font-[600] border border-[#f6986b] rounded-[30px]">
                Tags
            </h2>
            <ul className="flex flex-wrap w-[80%] my-4">
                <TagItem Title="Teachers" />
                <TagItem Title="Lessons" />
                <TagItem Title="Shelly" />
                <TagItem Title="Scghool" />
                <TagItem Title="Theme" />
                <TagItem Title="Class" />
            </ul>
        </div>
    )
}

export default Tags
