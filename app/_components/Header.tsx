import Logo from "./Logo"
import Navigation from "./Navigation"
import ThemeToggler from "./ThemeToggler"

export default function Header({ className }: { className: string }) {
  return (
    <header
      className={`${className} flex flex-wrap items-center justify-between gap-y-[0.6rem] gap-x-[0.2rem] max-w-[39rem]`}
    >
      <div className="w-full flex justify-center sm:w-fit md:block">
        <Logo color="white" />
      </div>
      <Navigation />
      <ThemeToggler size={25} />
    </header>
  )
}
