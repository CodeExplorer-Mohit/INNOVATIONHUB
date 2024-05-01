const CategoryItem = (props) => {
    return (
        <li className="flex justify-between items-center w-full my-1">
            <p className="text-[#555555] text-[1.2rem]">{props.Property}</p>
            <p className="text-[#555555] text-[1.2rem]">{props.Value}</p>
        </li>
    )
}

export default CategoryItem
