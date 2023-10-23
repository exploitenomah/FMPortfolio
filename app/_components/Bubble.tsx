import { CSSProperties } from "react"

export default function Bubble({
  className,
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return <span style={style} className={`${className} block fixed rounded-full`}></span>
}
