import BlogCard from './BlogCard'
import Sidebar from './Sidebar/Sidebar'

const BlogSection = () => {
    return (
        <section className="flex justify-center items-center w-[100%] my-10">
            <div className="flex justify-center items-start w-[80%]">
                <div className="flex flex-col justify-center items-center w-[75%]">
                    <BlogCard
                        Heading="Standard Post Sticky"
                        Description="Nullam erat dolor, hendrerit id turpis laoreet, congue dapibus odio. Duis tempor eros tortor, a ornare arcu egestas quis. Donec vehicula eget quam maximus interdum. Duis ultrices sapien eget metus luctus finibus. Morbi nec lobortis ante, sed condimentum nisl. Nam laoreet ullamcorper magna et fringilla"
                        ImgLink="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/three_female_students_one_male.jpg?itok=SKSrg2ug"
                    />
                    <BlogCard
                        Heading="Standard Post Format"
                        Description="Nullam erat dolor, hendrerit id turpis laoreet, congue dapibus odio. Duis tempor eros tortor, a ornare arcu egestas quis. Donec vehicula eget quam maximus interdum. Duis ultrices sapien eget metus luctus finibus. Morbi nec lobortis ante, sed condimentum nisl. Nam laoreet ullamcorper magna et fringilla"
                        ImgLink="https://empowering-teachers.eu/wp-content/themes/yootheme/cache/07/home-banner-1-075f0e64.webp"
                    />
                </div>
                <div className="flex flex-col justify-center items-center w-[25%] ml-2">
                    <Sidebar />
                </div>
            </div>
        </section>
    )
}

export default BlogSection
