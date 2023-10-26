import * as React from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../lib/utils'

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'w-full px-4 py-2 rounded-md border border-gray-300 focus:border focus:outline-gray-400 bg-white text-gray-700 text-base font-normal leading-6 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
        className,
        '',
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }

Input.propTypes = {
  className: PropTypes.any,
  type: PropTypes.any,
}
