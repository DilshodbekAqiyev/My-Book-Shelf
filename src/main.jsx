import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import App from './App'
import RootLayout from './layout/RootLayout'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function Main() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<App />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default Main
