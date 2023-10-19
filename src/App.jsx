import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function App() {
  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(false)
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {showLogo ? (
        <div className="fixed top-0 left-0 z-10 w-full h-screen flex justify-center items-center bg-white bg-cover bg-no-repeat">
          <img src="/assets/logo.svg" alt="Logo" />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Navigate to="/login" />
        </div>
      )}
    </>
  )
}

export default App
