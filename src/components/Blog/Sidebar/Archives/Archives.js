import ArchiveItem from './ArchiveItem'

const Archives = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full my-5">
            <h2 className="flex justify-center items-center w-[90%] h-[50px] text-[#222222] text-[1.3rem] font-[600] border border-[#f6986b] rounded-[30px]">
                Archives
            </h2>
            <ul className="flex flex-col justify-center items-start w-[80%] my-4">
                <ArchiveItem Month="December" />
                <ArchiveItem Month="January" />
                <ArchiveItem Month="February" />
                <ArchiveItem Month="March" />
            </ul>
        </div>
    )
}

export default Archives
