import { cn } from "@/lib/utils";
import { Input } from "../ui";
import { Label } from "../ui/label";
import { type BaseInputProps } from "./BaseInput";

type CheckboxInputProps = BaseInputProps;

export function CheckboxInput(props: CheckboxInputProps) {
  return (
    <div className="flex items-center w-full gap-2">
      <Input type="checkbox" {...props} className="h-4 w-4" />
      <Label
        htmlFor={props.id}
        className={cn(props.error && "text-destructive")}>
        {props.label}
        {props.required && <span className="text-destructive">*</span>}
      </Label>
    </div>
  );
}
