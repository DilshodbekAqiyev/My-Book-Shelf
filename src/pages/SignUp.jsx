import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import ShowLogo from '../components/ShowLogo'
import { Input } from '../components/ui/input'

const Login = () => {
  const [showEye, setShowEye] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmitingSignUpForm = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password1 = e.target.password1.value
    const password2 = e.target.password2.value

    if (password1 !== password2) {
      setErrorMessage('Parollar mos emas')
      return
    }

    if (!isStrongPassword(password1)) {
      setErrorMessage('Password is not valid')
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Notog'ri email formati yoki email majburiy maydon")
      return
    }

    setErrorMessage('')
    localStorage.setItem('currentUser', JSON.stringify({ email, password: password1 }))
    window.location.href = '/login'
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    return emailRegex.test(email)
  }

  function isStrongPassword(password) {
    if (password.length < 8) {
      return false
    }
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    return hasUpperCase && hasLowerCase && hasNumber
  }
  return (
    <section
      className="fixed top-0 left-0 w-full h-screen bg-body-bg bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/assets/bodyBG.png)' }}
    >
      <ShowLogo />
      <form
        className="mx-auto w-[520px] rounded-xl bg-white py-16 px-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onSubmit={onSubmitingSignUpForm}
      >
        <div className="flex justify-center items-center flex-col">
          <img src="/assets/logo.svg" alt="logo" loading="lazy" className="w-40 h-20" />
          <div className="text-gray-700 text-center text-20 pt-10">Registration</div>
          <div className="mt-3 mb-10 text-gray-400 text-center font-inter text-15 font-normal leading-5">
            For Both Staff & Students
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div>
            <label htmlFor="email" className="text-gray-700 text-16 leading-4 mb-2">
              Email
            </label>
            <Input type="email" name="email" id="email" required placeholder="username@collegename.ac.in" />
          </div>

          <div>
            <label htmlFor="password1" className="text-gray-700 text-16 leading-4 mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                type={showEye ? 'password' : 'text'}
                name="password"
                id="password1"
                required
                placeholder="••••••••"
              />
              <span
                className="cursor-pointer absolute top-1.5 right-1 p-1 rounded-full"
                onClick={() => setShowEye((prev) => !prev)}
              >
                {showEye ? (
                  <AiOutlineEye size={20} color="#8EA2B9" />
                ) : (
                  <AiOutlineEyeInvisible size={20} color="#8EA2B9" />
                )}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="password2" className="text-gray-700 text-16 leading-4 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Input
                type={showEye ? 'password' : 'text'}
                name="password"
                id="password2"
                required
                placeholder="••••••••"
              />
              <span
                className="cursor-pointer absolute top-1.5 right-1 p-1 rounded-full"
                onClick={() => setShowEye((prev) => !prev)}
              >
                {showEye ? (
                  <AiOutlineEye size={20} color="#8EA2B9" />
                ) : (
                  <AiOutlineEyeInvisible size={20} color="#8EA2B9" />
                )}
              </span>
            </div>
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errorMessage && <span className="font-medium">{errorMessage}</span>}
            </p>
          </div>
        </div>
        <button
          className="text-white my-12 text-center text-base font-semibold leading-none w-full py-2.5 px-4 rounded-md bg-[#fa7c54]"
          type="submit"
          onSubmit={onSubmitingSignUpForm}
        >
          Login
        </button>
        <p className="text-gray-700 text-base font-normal leading-4">
          Already a User?{' '}
          <Link to="/login" className="underline">
            Login now
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Login
