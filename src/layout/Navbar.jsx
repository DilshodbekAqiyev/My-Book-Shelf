import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AiOutlineGift, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { GiBookshelf, GiHamburgerMenu } from 'react-icons/gi'
import { SiGoogletranslate } from 'react-icons/si'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'
import Image from '../components/Image'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { translationKeys } from '../lib/translationKey'
import DateTimeComponent from '../components/DateTimeComponent'

function Navbar() {
  const { t, i18n } = useTranslation()

  const onSubmittingSearchForm = (e) => {
    e.preventDefault()
  }

  const onSearchType = (e) => {
    console.log(e)
  }

  const changeLanguage = (e) => {
    i18n.changeLanguage(e)
    localStorage.setItem('lang', e)
  }

  return (
    <header className="py-9 px-11 rounded-lg bg-transparent max-lg:py-7 max-lg:px-9">
      <div className="container flex items-center justify-between">
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu size={24} color={'#4D4D4D'} />
          </SheetTrigger>
          <SheetContent side={'left'} className="max-sm:w-full">
            <SheetHeader>
              <SheetTitle>
                <Image src="/assets/logo.svg" className="w-[140px] h-[70px] mx-auto" />
              </SheetTitle>
              <div className="flex flex-col justify-between items-center h-[720px]">
                <ul className="mt-10 flex flex-col gap-[25px] w-[230px]">
                  <li className="whitespace-nowrap text-gray-600 font-inter text-base font-normal flex items-center gap-2">
                    <AiOutlineHome size={20} color="#4D4D4D" />
                    <NavLink to="/">{t(translationKeys['Home'])}</NavLink>
                  </li>
                  <li className="whitespace-nowrap text-gray-600 font-inter text-base font-normal flex items-center gap-2">
                    <AiOutlineSearch size={20} color="#4D4D4D" />
                    <NavLink to="/search">{t(translationKeys['Search'])}</NavLink>
                  </li>
                  <li className="whitespace-nowrap text-gray-600 font-inter text-base font-normal flex items-center gap-2">
                    <GiBookshelf size={20} color="#4D4D4D" />
                    <NavLink to="/shelf">{t(translationKeys['My Shelf'])}</NavLink>
                  </li>
                  <li className="whitespace-nowrap text-gray-600 font-inter text-base font-normal flex items-center gap-2">
                    <AiOutlineGift size={20} color="#4D4D4D" />
                    <NavLink to="/contribute">{t(translationKeys['Contribute'])}</NavLink>
                  </li>
                </ul>
                <ul className="mt-10 flex flex-col gap-[25px] w-[174px]">
                  <li className="whitespace-nowrap text-gray-600 font-inter text-base font-normal flex items-center gap-2">
                    <NavLink to="/about">{t(translationKeys['About'])}</NavLink>
                  </li>
                  <li className="whitespace-nowrap text-gray-600 font-inter text-base font-normal flex items-center gap-2">
                    <NavLink to="/support">{t(translationKeys['Support'])}</NavLink>
                  </li>
                  <li className="whitespace-nowrap text-gray-600 font-inter text-base font-normal flex items-center gap-2">
                    <NavLink to="/termsCondition">{t(translationKeys['Terms & Condition'])}</NavLink>
                  </li>
                </ul>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div>
          <form
            onSubmit={onSubmittingSearchForm}
            className="rounded-full bg-white shadow-md w-[360px] relative flex items-center"
          >
            <Select onValueChange={(e) => onSearchType(e)}>
              <SelectTrigger className="absolute top-[1px] left-[1px] w-[105px] rounded-s-full bg-gray-200 text-gray-700 font-inter font-semibold text-base leading-5">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="autor">Autor</SelectItem>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="subjects">Subjects</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder={t(translationKeys['Search'])} className="rounded-full pl-[115px] pr-[38px]" />
            <Button
              type={'submit'}
              onSubmit={onSubmittingSearchForm}
              variant="link"
              className="rounded-e-full absolute top-[1px] left-auto right-[1px] p-2"
            >
              <AiOutlineSearch size={25} color="#F76B56" />
            </Button>
          </form>
        </div>

        <Select onValueChange={(e) => changeLanguage(e)}>
          <SelectTrigger className="rounded-full w-[120px] bg-white shadow-md text-gray-700 font-inter font-semibold text-base leading-5">
            <span>
              <SiGoogletranslate size={16} color="#F76B56" />
            </span>
            <SelectValue placeholder="Lang" defaultChecked={2} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">Eng</SelectItem>
            <SelectItem value="ru">Ru</SelectItem>
            <SelectItem value="uz">Uz</SelectItem>
          </SelectContent>
        </Select>

        <DateTimeComponent />

        <DropdownMenu>
          <DropdownMenuTrigger className="navbarProfileDropdown rounded-full bg-white shadow-md p-[3px] pr-5 h-[40px] flex justify-between gap-5 items-center">
            <Image src={'/assets/kensonAvatar.svg'} className={'rounded-full w-[34px] h-[34px]'} />
            Kenson
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <NavLink
                to={'/dashboard'}
                className={'navbarProfile text-gray-700 font-inter text-[15px] font-normal leading-normal'}
              >
                {t(translationKeys['Profile'])}
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink
                to={'/favourite'}
                className={'navbarProfile text-gray-700 font-inter text-[15px] font-normal leading-normal'}
              >
                {t(translationKeys['Favourite'])}
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink
                to={'/payments'}
                className={'navbarProfile text-gray-700 font-inter text-[15px] font-normal leading-normal'}
              >
                {t(translationKeys['Payments'])}
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                to={'/login'}
                className={'navbarProfile text-gray-700 font-inter text-[15px] font-normal leading-normal'}
              >
                {t(translationKeys['Logout'])}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Navbar
