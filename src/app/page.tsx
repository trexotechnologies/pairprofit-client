import Image from "next/image";

import AvatarCircle from "@/components/shared/AvatarCircle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#333] font-sans overflow-x-hidden">
      {/* Header / Navbar */}
      <header className="p-4 md:block hidden ">
        <img src="/logo.png" alt="Logo" className="h-6 md:h-8 w-auto" />
      </header>
      <section className="flex items-center justify-center pt-2 pb-8 px-6 max-w-7xl mx-auto mt-12">
        {/* The Avatar Circle layout */}
        <div className="max-w-xl">
          <img src="/Group.png" alt="Hero" className="w-full h-auto" />
        </div>
      </section>

      <div className="flex flex-col items-center justify-center pt-2 pb-8 px-6 max-w-7xl mx-auto">
        {/* Text and CTA */}
        <div className="text-center max-w-3xl animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-3xl md:block hidden md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Welcome to <span className="text-[#1680ab]">PairProfit</span>
          </h1>
          <h1 className="text-2xl md:hidden block font-bold mb-3 tracking-tight">
            Welcome to back!
          </h1>
          <p className="text-base md:block hidden md:text-lg text-gray-500 mb-6 leading-relaxed font-medium">
            Find skilled workers, discover clients, or offer your services -
            <br className="hidden md:block" /> all in one place.
          </p>
          <p className="text-sm md:hidden block text-gray-500 mb-6 leading-relaxed font-medium">
            Sign In to PairProfit to continue using it
          </p>

          <Link href="/onboarding" className="w-full flex justify-center md:inline-block">
            <Button size="lg" className="md:w-auto mt-4 md:mt-0 shadow-premium">
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </main >
  );
}
