import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Layout>
        <h2 className="text-gray-700 text-[35px] font-inter font-semibold leading-10 mt-[43px] mb-[24px]">
          Good Morning
        </h2>
        <div className="flex justify-between items-center pb-[12px]">
          <p className="text-gray-700 text-[25px] font-inter font-normal leading-8">Recommended for You</p>
          <Link className="text-gray-700 font-normal text-[18px]">Show All</Link>
        </div>
      </Layout>
    </div>
  )
}

export default Home
