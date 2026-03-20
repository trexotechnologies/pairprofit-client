import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-xl border border-gray-100 bg-[#f8fafc] px-4 py-3 text-sm font-medium transition-all outline-none placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#1680ab]/20 focus-visible:border-[#1680ab] disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
