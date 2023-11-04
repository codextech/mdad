import * as React from "react";

import {cn} from "@/lib/utils";

const Textarea = React.forwardRef(({className, ...props}, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-[#545C9B] bg-[#282F62] px-3 py-2 text-sm ring-offset-[#282F62] placeholder:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export {Textarea};
