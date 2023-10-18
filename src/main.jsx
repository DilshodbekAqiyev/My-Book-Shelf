import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import App from './App'
import RootLayout from './layout/RootLayout'
import NotFound from './pages/NotFound'

function Main() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<App />} />
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
