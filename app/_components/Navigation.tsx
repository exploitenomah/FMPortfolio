import { NavLink } from "./Links"
export default function Navigation() {
  return (
    <nav>
      <ul className="pl-3 flex list-disc gap-x-[1.8rem] sm:gap-x-[2rem] md:gap-x-[2.25rem] text-[0.8rem] sm:text-[1rem] md:text-base">
        <li>
          <NavLink href="/about-me">about me</NavLink>
        </li>
        <li>
          <NavLink href="/contact-me">contact me</NavLink>
        </li>
        <li>
          <NavLink href="/portfolio">portfolio</NavLink>
        </li>
      </ul>
    </nav>
  )
}
