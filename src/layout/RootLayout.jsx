import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function RootLayout() {
  return (
    <div
      className="py-7 px-10 bg-cover bg-center bg-no-repeat font-inter font-normal max-lg:p-5"
      style={{ backgroundImage: 'url(/assets/bodyBG.png)' }}
    >
      <div className="bg-gray-200 rounded-xl max-w-[1650px] mx-auto">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RootLayout
