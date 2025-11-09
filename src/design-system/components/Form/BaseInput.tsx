import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export type BaseInputProps = ComponentProps<"input"> & {
  label?: string;
  error?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  value?: string | number | readonly string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
};

export function BaseInput({
  id,
  type,
  label,
  error,
  required,
  register,
  value,
  onChange,
  onBlur,
  name,
  ...props
}: BaseInputProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      {label && (
        <Label htmlFor={id} className={cn(error && "text-destructive")}>
          {label} {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <Input
        id={id}
        type={type}
        register={register}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        {...props}
      />
    </div>
  );
}
