import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function RootLayout() {
  return (
    <div className="py-7 px-10" style={{ backgroundImage: 'url(/assets/bodyBG.png)' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Sidebar />
    </div>
  )
}

export default RootLayout
