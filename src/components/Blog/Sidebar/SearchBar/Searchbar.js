import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
    return (
        <div className="flex justify-center items-center w-full my-5">
            <div className="flex justify-center items-center w-[90%] h-[50px] border rounded-[30px]">
                <input
                    type="searchbar"
                    placeholder="search"
                    className="focus:outline-none w-full h-full bg-[transparent] px-5 focus:text-[#555555] italic"
                />
                <button>
                    <FaSearch color="#1C5C9C" size={25} className="mr-3" />
                </button>
            </div>
        </div>
    )
}

export default Searchbar
