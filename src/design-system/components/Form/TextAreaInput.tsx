import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TextAreaInputProps = ComponentProps<"textarea"> & {
  label?: string;
  error?: string;
  required?: boolean;
};
export function TextAreaInput({
  id,
  label,
  error,
  required,
  ...props
}: TextAreaInputProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      {label && (
        <Label htmlFor={id} className={cn(error && "text-destructive")}>
          {label} {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <Textarea id={id} {...props} />
      {error && <span className="text-destructive text-sm">{error}</span>}
    </div>
  );
}
