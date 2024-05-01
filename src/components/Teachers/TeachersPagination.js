import PaginationButton from './PaginationButton'
const TeachersPagination = () => {
    return (
        <section className="flex justify-end items-center w-[100%]">
            <div className="flex justify-center items-center px-5">
                <PaginationButton text="1" Color="#555555" />
                <PaginationButton
                    text="2"
                    Color="#222222"
                    Style="underline decoration-[#F37335] decoration-[2px]"
                />
                <PaginationButton text="3" Color="#555555" />
                <PaginationButton text="4" Color="#555555" />
                <span className="text-[1.2rem] text-[#555555]">...</span>
                <PaginationButton text="15" Color="#555555" />
            </div>
        </section>
    )
}

export default TeachersPagination
