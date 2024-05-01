import { GoPrimitiveDot } from 'react-icons/go'

const ArchiveItem = (props) => {
    return (
        <li className="flex justify-start items-start w-full my-3">
            <div className="flex justify-center items-center mr-2">
                <GoPrimitiveDot color="#155799" size={18} />
            </div>
            <p className="text-[#333333] font-[600] text-left leading-4 duration-300 hover:text-[#f6986b]">
                {props.Month}
            </p>
        </li>
    )
}

export default ArchiveItem
