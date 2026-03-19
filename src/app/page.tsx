import Image from "next/image";

import AvatarCircle from "@/components/AvatarCircle";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#333] font-sans overflow-x-hidden">
      {/* Header / Navbar */}
      <header className="p-6 md:block hidden ">
        <img src="/logo.png" alt="Logo" className="h-8 md:h-10 w-auto" />
      </header>
      <section className="flex items-center justify-center pt-2 pb-20 px-6 max-w-7xl mx-auto  mt-40">
        {/* The Avatar Circle layout */}
        <div>
          <img src="/Group.png" alt="Hero" className="" />
        </div>
      </section>

      <div className="flex flex-col items-center justify-center pt-2 pb-20 px-6 max-w-7xl mx-auto">
        {/* Text and CTA */}
        <div className="text-center max-w-3xl animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-4xl md:block hidden text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Welcome to <span className="text-[#1680ab]">PairProfit</span>
          </h1>
          <h1 className="text-4xl md:hidden block text-[25px] lg:text-6xl font-bold mb-4 tracking-tight">
            Welcome to back!
          </h1>
          <p className="text-lg md:block hidden text-xl text-gray-500 mb-10 leading-relaxed font-medium">
            Find skilled workers, discover clients, or offer your services -
            <br className="hidden md:block" /> all in one place.
          </p>
          <p className="text-[15px] md:hidden block text-gray-500 mb-10 leading-relaxed font-medium">
            Sign In to PairProfit to continue using it
          </p>

          <Link href="/onboarding" className="w-full flex justify-center md:inline-block">
            <Button size="xl" className="md:w-auto mt-8 md:mt-0">
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </main >
  );
}
