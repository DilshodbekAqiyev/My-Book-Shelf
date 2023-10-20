import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function RootLayout() {
  return (
    <div
      className="py-7 px-10 h-screen bg-cover bg-center bg-no-repeat font-inter font-normal"
      style={{ backgroundImage: 'url(/assets/bodyBG.png)' }}
    >
      <div className="bg-gray-200 rounded-xl">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Sidebar />
      </div>
    </div>
  )
}

export default RootLayout
