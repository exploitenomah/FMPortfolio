"use client"

import {
  createElement,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  ReactNode,
} from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AppLink({
  as,
  children,
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  as?: string
}) {
  return createElement(
    as || "a",
    {
      ...props,
      onClick: (e) => {
        props.onClick && props.onClick(e)
      },
    },
    children
  )
}

export const NavLink = ({
  href,
  exact = false,
  children,
  activeClassName = " font-bold",
  ...props
}: {
  href: string
  exact?: boolean
  className?: string
  children?: ReactNode | ReactNode[]
  activeClassName?: string
}) => {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += activeClassName
  }

  return (
    <Link
      href={href}
      {...props}
      className={`${props.className} font-[300] text-inherit`}
    >
      {children}
    </Link>
  )
}
