import dayjs from 'dayjs'
import { WiTime9 } from 'react-icons/wi'
import { FcCalendar } from 'react-icons/fc'
import { useState } from 'react'
import { useEffect } from 'react'

function DateTimeComponent() {
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  // const currentTime = dayjs().format('hh:mm A')
  // const currentDate = dayjs().format('D-MMM-YYYY')

  useEffect(() => {
    setCurrentTime(dayjs().format('hh:mm A'))
    setCurrentDate(dayjs().format('D-MMM-YYYY'))
  }, [])

  return (
    <div className="rounded-full bg-white shadow-md px-[30px] h-[40px] flex justify-between gap-5 items-center">
      <div className="flex items-center gap-3">
        <WiTime9 size={20} color="#F76A56" />
        <span className="whitespace-nowrap text-gray-700 text-center font-digital-numbers text-sm font-normal leading-5 tracking-wider">
          {currentTime}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <FcCalendar size={20} />
        <span className="whitespace-nowrap text-gray-700 text-center font-digital-numbers text-sm font-normal leading-5 tracking-wider">
          {currentDate}
        </span>
      </div>
    </div>
  )
}

export default DateTimeComponent
