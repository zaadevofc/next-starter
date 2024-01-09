'use client'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { LuLayers, LuLoader2, LuLogIn, LuLogOut, LuMoon, LuPlay, LuSunMedium } from "react-icons/lu";

const Features = ['Typescript', 'NextJS', 'NextUI', 'NextAuth', 'Next Themes', 'React Icons', 'React Lenis', 'React Query', 'Framer Motion', 'TailwindCSS', 'Prisma ORM', 'Web Visitor']

const Home = () => {
  const [isCounter, setCounter] = useState(0);
  const [isStatus, setStatus] = useState(false);
  const { theme, setTheme } = useTheme()

  const { data: session, status } = useSession()

  const visitors = useQuery({
    queryFn: async () => {
      const req = await fetch('https://kounter.vercel.app/hit/2CILgwFi2G');
      const json = await req.json();
      return json;
    },
    queryKey: ['visitors']
  })

  return (
    <>
      <div className="flex gap-2 flex-col min-h-svh justify-center items-center p-5">
        <h1 className="text-3xl font-bold text-center">Welcome to Custom <span className="bg-stone-500/20">Next App</span></h1>
        <h1 className="text-center">edit your code in <code className="bg-stone-500/20 rounded-md px-1">page.tsx</code> file</h1>
        <div className="flex flex-col mt-5 gap-8 items-center">
          <div className="flex gap-2 items-center pb-1 border-b-2 border-stone-500">
            <LuPlay className='text-stone-600' />
            <h1 className="uppercase">Playground</h1>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 items-center justify-center inset-0 gap-4">
            <div className="flex flex-col items-center border border-stone-600 rounded-lg px-5 py-3 min-w-20 h-full">
              <h1 className={`${isCounter > 0 ? '!text-green-500' : '!text-red-500'} text-black duration-500 text-lg font-bold`}>{isCounter}</h1>
              <h1>Counter</h1>
              <div className="flex gap-4 items-center mt-2">
                <h1 onClick={() => setCounter(x => x - 1)} className="bg-stone-500/20 rounded-md cursor-pointer px-2">-</h1>
                <h1 onClick={() => setCounter(x => x + 1)} className="bg-stone-500/20 rounded-md cursor-pointer px-2">+</h1>
              </div>
            </div>
            <div className="flex flex-col items-center border border-stone-600 rounded-lg px-5 py-3 min-w-20 h-full">
              <h1 className={`text-lg font-bold`}>{visitors.data ? visitors.data.count : <LuLoader2 className='animate-spin text-3xl' />}</h1>
              <h1>Visitors</h1>
              <h1 className="bg-stone-500/20 mt-2 rounded-md cursor-pointer px-2">record</h1>
            </div>
            <div className="flex flex-col items-center border border-stone-600 rounded-lg px-5 py-3 min-w-20 h-full">
              <h1 className={`${isStatus ? 'text-green-500' : 'text-red-500'} duration-500 text-lg font-bold`}>{isStatus ? 'ON' : 'OFF'}</h1>
              <h1>Status</h1>
              <h1 onClick={() => setStatus(x => !x)} className="bg-stone-500/20 mt-2 rounded-md cursor-pointer px-2">change</h1>
            </div>
            <div className="flex flex-col items-center border border-stone-600 rounded-lg px-5 py-3 min-w-20 h-full">
              <div className={`text-[29px] font-bold`}>
                {theme == 'light' ? <LuSunMedium className='text-amber-500' /> : <LuMoon />}
              </div>
              <h1>Theme</h1>
              <h1 onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')} className="bg-stone-500/20 mt-auto rounded-md cursor-pointer px-2">change</h1>
            </div>
            {status !== 'loading' && <div className="flex flex-col justify-between items-center border border-stone-600 rounded-lg px-5 py-3 min-w-20 h-full">
              <div className={`w-7 text-[29px] font-bold`}>
                {status == 'unauthenticated' ? <LuLogIn /> : (
                  <img className="rounded-full drop-shadow-md" src="https://avatars.githubusercontent.com/u/93970726?v=4" alt="" />
                )}
              </div>
              <h1 className="line-clamp-1 max-w-20">{status == 'unauthenticated' ? 'Auth' : session?.user?.name}</h1>
              <Dropdown className="border border-stone-500" closeOnSelect={false}>
                <DropdownTrigger>
                  <h1 className="bg-stone-500/20 mt-2 rounded-md cursor-pointer px-2">{status == 'unauthenticated' ? 'login' : 'logged'}</h1>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="github_login">
                    {status == 'unauthenticated' ? (
                      <div onClick={() => signIn('github')} className="flex items-center gap-2">
                        <img className="w-5 rounded-full" src="/logo/github.svg" alt="Github" />
                        <h1>Github</h1>
                      </div>
                    ) : (
                      <div onClick={() => signOut()} className="flex items-center gap-2">
                        <LuLogOut />
                        <h1>Logout</h1>
                      </div>
                    )}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>}
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-8 items-center">
          <div className="flex gap-2 items-center pb-1 border-b-2 border-stone-500">
            <LuLayers className='text-stone-600' />
            <h1 className="uppercase">Features</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:w-1/2">
            {Features.map(x => (
              <h1 key={x} className="bg-stone-500/20 text-center rounded-md cursor-pointer px-2">{x}</h1>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-[1500px]">

      </div>
    </>
  )
}

export default Home