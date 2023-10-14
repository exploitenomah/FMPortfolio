import Header from "./_components/Header"
import Footer from "./_components/Footer"
import Socials from "./_components/Socials"
import AppButton from "./_components/Buttons"

export default function Home() {
  return (
    <div className="relative min-h-screen flex">
      <div className="fixed inset-x-0 h-screen lg:block lg:sticky lg:top-0 lg:h-screen md:w-[50vw] lg:inset-y-0 lg:left-0 bg-primary-default"></div>
      <div className="grow mx-auto px-4 flex flex-col justify-between relative">
        <Header className="mx-auto mt-[3.2rem] w-full" />
        <main className="flex flex-col gap-y-[1.6rem] items-center mt-auto mb-auto text-center">
          <h1 className="text-[2.4rem] font-[300]">Exploit Enomah</h1>
          <AppButton className="py-[0.75rem] px-[1.12rem] border rounded-[0.3rem] min-w-[2.67rem] text-base xl:text-[1.2rem] font-semibold uppercase">
            Portfolio
          </AppButton>
        </main>
        <div className="">
          <Socials className="flex-col mb-[1.25rem] w-fit" />
        </div>
        <Footer className="mx-auto mb-[2.1rem] w-full" />
      </div>
    </div>
  )
}
