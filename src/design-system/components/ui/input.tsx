import * as React from "react";

import { cn } from "@/lib/utils";
import type { UseFormRegisterReturn } from "react-hook-form";

type InputProps = React.ComponentProps<"input"> & {
  register?: UseFormRegisterReturn;
};

function Input({ className, type, register, value, onChange, onBlur, name, ...props }: InputProps) {
  // If register is provided, use it (uncontrolled pattern)
  // Otherwise, use value/onChange directly (controlled pattern from FormField)
  if (register) {
    const { ref, ...rest } = register;
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...rest}
        {...props}
      />
    );
  }

  // Controlled pattern (from FormField/Controller)
  return (
    <input
      type={type}
      data-slot="input"
      name={name}
      value={value ?? ""}
      onChange={onChange}
      onBlur={onBlur}
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
