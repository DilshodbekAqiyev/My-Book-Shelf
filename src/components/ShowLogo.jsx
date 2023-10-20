import { useState, useEffect } from 'react'

const ShowLogo = () => {
  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(false)
    }, 2500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <>
      {showLogo ? (
        <div className="fixed top-0 left-0 z-10 w-full h-screen flex justify-center items-center bg-white bg-cover bg-no-repeat">
          <img src="/assets/logo.svg" alt="Logo" loading="lazy" />
        </div>
      ) : null}
    </>
  )
}

export default ShowLogo
