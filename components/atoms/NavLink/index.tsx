

import Link, { LinkProps } from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import useMobileDeviceDetection from 'hooks/useMobileDetection'

interface Props {
  href: string
  value: string
  canActive?: boolean
  target?: string // Add the 'target' prop
}

const NavLink = ({ href, value, canActive = false, target }: Props) => {
  const router = useRouter()
  const isMobile = useMobileDeviceDetection()

  return (
    <Link href={href} passHref>
      <a
        className={`text-base text-white select-none hover:text-white ${
          router.pathname == href && canActive
            ? 'font-semibold'
            : 'text-opacity-80'
        } ${isMobile ? 'cursor-default' : 'cursor-pointer'}`}
        target={target} // Use the 'target' prop here
        rel={target === '_blank' ? 'noopener noreferrer' : ''}
      >
        {value}
      </a>
    </Link>
  )
}

export default NavLink
