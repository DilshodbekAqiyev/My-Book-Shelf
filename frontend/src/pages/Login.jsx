import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { useTranslation } from 'react-i18next'
import { translationKeys } from '../lib/translationKey'

import ShowLogo from '../components/ShowLogo'

const Login = () => {
  const [showEye, setShowEye] = useState(true)
  const [isUser, setIsUser] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'))
    if (user) {
      setIsUser(true)
    }
  }, [])

  const onSubmitForm = (e) => {
    e.preventDefault()

    const user = JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser'))

    if (user && user.email === email && user.password === password) {
      if (rememberMe) {
        localStorage.setItem('currentUser', JSON.stringify(user))
      } else {
        sessionStorage.setItem('currentUser', JSON.stringify(user))
      }

      navigate('/')
    } else {
      setErrorMessage(t(translationKeys['Invalid email or password.']))
    }
  }

  return (
    <section
      className="fixed top-0 left-0 w-full h-screen bg-body-bg bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/assets/bodyBG.png' }}
    >
      <ShowLogo />
      <form
        className="mx-auto w-[500px] rounded-xl bg-white py-16 px-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onSubmit={onSubmitForm}
      >
        <div className="flex justify-center items-center flex-col">
          <img src="/assets/logo.svg" alt="logo" loading="lazy" className="w-40 h-20" />
          <div className="text-gray-700 text-center text-20 pt-16">{t(translationKeys['Welcome Back !'])}</div>
          <div className="mt-3 mb-10 text-gray-400 text-center font-inter text-15 font-normal leading-5">
            {t(translationKeys['Sign in to continue to yourDigital Library'])}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-gray-700 text-16 leading-4 mb-2">
            {t(translationKeys.Email)}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 text-base font-normal leading-6"
            required
            placeholder="username@collegename.ac.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="text-gray-700 text-16 leading-4 mb-2">
            {t(translationKeys.Password)}
          </label>
          <div className="relative">
            <input
              type={showEye ? 'password' : 'text'}
              name="password"
              id="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border focus:border-gray-300 bg-white text-gray-700 text-base font-normal leading-6"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <div className="mt-11 flex justify-between items-center">
          <div className="flex justify-center items-center gap-1">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="w-4 h-4 bg-orange-500"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember" className="ms-2 text-gray-700 text-base font-normal leading-4">
              {t(translationKeys['Remember me'])}
            </label>
          </div>
          <div>
            <Link to="/forgot-password" className="text-gray-700 text-right text-base font-normal leading-4 underline">
              {t(translationKeys['Forgot password?'])}
            </Link>
          </div>
        </div>
        <button
          className="text-white my-12 text-center text-base font-semibold leading-none w-full py-2.5 px-4 rounded-md bg-[#fa7c54]"
          type="submit"
        >
          {t(translationKeys.Login)}
        </button>
        <p className="text-gray-700 text-base font-normal leading-4">
          {t(translationKeys['New User?'])}{' '}
          <Link to="/signup" className="underline">
            {t(translationKeys['Register Here'])}
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Login
