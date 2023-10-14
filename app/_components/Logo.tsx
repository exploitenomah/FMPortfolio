export default function Logo({ color ='#242424'}: { color?: string }) {
  return (
    <svg
      width="24"
      height="30"
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 12.5078V8.57745L9.78458 8L4.34694 9.47157L3 13.849L9.78458 17.4441L3 23.6471L5.71882 26.6833L9.78458 27L14 26.3294V21.7284"
        stroke={color}
        strokeWidth="4"
      />
      <path
        d="M22 4.84706V2.36471L18.9342 2L14.9796 2.92941L14 5.69412L18.9342 7.96471L14 11.8824L15.9773 13.8L18.9342 14L22 13.5765V10.6706"
        stroke={color}
        strokeWidth="3"
      />
    </svg>
  )
}
