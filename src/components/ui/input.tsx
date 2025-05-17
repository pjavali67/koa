// import * as React from "react"

// import { cn } from "../../lib/utils"
// export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   suffix?: React.ReactNode;
// }

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ suffix, className, type = "text", iconLeft, ...props }, ref) => {
//     return (

//       <div className="flex gap-2 items-center">
//         <input
//           type={type}
//           data-slot="input"
//           className={cn(
//             "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//             "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
//             "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
//             className
//           )}
//           {...props}
//         />
//         {suffix}
//       </div>
//   )
//   };

import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, className, type = "text", ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <input
          type={type}
          ref={ref}
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive  ",
            suffix ? "pr-10" : "", // add padding if suffix exists
            className
          )}
          {...props}
        />
        {suffix && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {suffix}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
