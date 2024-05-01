import CategoryItem from './CategoryItem'

const Categories = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full my-5">
            <h2 className="flex justify-center items-center w-[90%] h-[50px] text-[#222222] text-[1.3rem] font-[600] border border-[#f6986b] rounded-[30px]">
                Categories
            </h2>
            <ul className="flex flex-col justify-center items-start w-[80%] my-4">
                <CategoryItem Property="Teachers" Value={45} />
                <CategoryItem Property="School News" Value={13} />
                <CategoryItem Property="Lessons" Value={6} />
                <CategoryItem Property="Shelly" Value={89} />
            </ul>
        </div>
    )
}

export default Categories
