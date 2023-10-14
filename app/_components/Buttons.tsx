"use client"

import {
  createElement,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactNode,
} from "react"

export default function AppButton({
  as,
  children,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  as?: string
}) {
  return createElement(
    as || "button",
    {
      ...props,
      onClick: (e) => {
        props.onClick && props.onClick(e)
      },
    },
    children
  )
}
