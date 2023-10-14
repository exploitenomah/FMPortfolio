export default function RadioIcon({
  checked,
  fill = "black",
}: {
  checked: boolean
  fill?: string
}) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {checked && <circle cx="4.5" cy="4.5" r="1.75" fill={fill} />}
      <rect x="0.5" y="0.5" width="8" height="8" rx="4" stroke={fill} />
    </svg>
  )
}
