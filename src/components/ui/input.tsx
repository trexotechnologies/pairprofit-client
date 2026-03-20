import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
          "flex h-[50px] w-full rounded-xl border border-gray-100 bg-[#f8fafc] px-4 py-2 text-sm font-semibold ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
