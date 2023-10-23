"use client"
import Header from "../_components/Header"
import Footer from "../_components/Footer"
import Socials from "../_components/Socials"
import Bubbles from "../_components/Bubbles"

export default function AboutPage() {
  return (
    <>
      <div className="lg:hidden">
        <Bubbles bubbleCount={5} />
      </div>
      <div className="relative min-h-screen flex">
        <div className="grow mx-auto px-4 flex flex-col justify-between relative">
          <Header className="mx-auto mt-[3.2rem] w-full" />
          <main className="flex flex-col gap-y-[1.6rem] items-center mt-auto mb-auto text-center py-12">
            <h1 className="text-[2.4rem] font-[300]">About Me</h1>
            <p className="text-[1rem] text-normal max-w-[30rem] lg:max-w-[30rem] mx-auto text-center">
              Morbi sed vulputate sem. Proin tempor suscipit arcu congue
              hendrerit. Duis sit amet neque non erat cursus fermentum et ac
              mauris. Proin eget nunc libero. Vivamus varius quam nisl, ac
              ultrices risus tincidunt eget. Mauris erat lorem, consectetur vel
              sollicitudin id, suscipit eu neque. Proin tellus elit, interdum at
              faucibus et, sollicitudin eget arcu. Ut eget posuere purus. Sed at
              egestas massa. Fusce vitae elit et sem rutrum volutpat rhoncus
              vestibulum tellus. Proin eu nunc ac nisi tristiqu a mollis dolor.
              Vivamus ullamcorper x ac dui tincidunt, mattis facilisis orci
              pretium. Curabitur feugiat aliquet leo at convallis. Suspendisse
              et iaculis est. Vestibulum eget leo nulla. Mauris sodales eget
              diam ac posuere. Duis faucibus, justo eu ultricies faucibus, sem
              lectus finibus lorem, ut tincidunt dolor augue ongue. Fusce mollis
              blandit tempus.
            </p>
          </main>
          <div className="">
            <Socials className="flex-col mb-[1.25rem] w-fit" />
          </div>
          <Footer className="mx-auto mb-[2.1rem] w-full" />
        </div>
        <div className="hidden fixed inset-x-0 h-screen lg:block lg:sticky lg:top-0 lg:h-screen md:w-[50vw] lg:inset-y-0 lg:left-0 bg-primary-default"></div>
      </div>
    </>
  )
}
