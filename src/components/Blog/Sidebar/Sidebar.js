import Archives from './Archives/Archives'
import Calendar from './Calendar/Calendar'
import Categories from './Category/Categories'
import LatestPost from './LatestPost/LatestPost'
import RecentComments from './RecentComments/RecentComments'
import Searchbar from './SearchBar/Searchbar'
import Tags from './Tags/Tags'

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Searchbar />
            <Categories />
            <LatestPost />
            <RecentComments />
            <Archives />
            <Tags />
            <Calendar />
        </div>
    )
}

export default Sidebar
