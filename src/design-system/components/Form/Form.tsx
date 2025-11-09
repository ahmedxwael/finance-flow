import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  useForm,
  type DefaultValues,
  type FieldPath,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";
import type { z } from "zod";
import { Button } from "../ui/button";
import {
  FormComponent,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { CheckboxInput } from "./CheckboxInput";
import { EmailInput } from "./EmailInput";
import { IntegerInput } from "./IntegerInput";
import { PasswordInput } from "./PasswordInput";
import { SelectInput } from "./SelectInput";
import { SwitchInput } from "./SwitchInput";
import { TextAreaInput } from "./TextAreaInput";
import { TextInput } from "./TextInput";

export type FieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "textarea"
  | "select"
  | "switch"
  | "checkbox";

export type BaseFieldConfig<T extends FieldValues> = {
  name: FieldPath<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

export type TextFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  type: "text" | "email" | "password" | "number";
};

export type TextAreaFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  type: "textarea";
  rows?: number;
};

export type SelectFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  type: "select";
  options: Array<{ label: string; value: string }>;
  isLoading?: boolean;
};

export type SwitchFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  type: "switch";
};

export type CheckboxFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  type: "checkbox";
};

export type CustomFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  type: "custom";
  render: (field: any, form: UseFormReturn<T>) => React.ReactNode;
};

export type FormFieldConfig<T extends FieldValues> =
  | TextFieldConfig<T>
  | TextAreaFieldConfig<T>
  | SelectFieldConfig<T>
  | SwitchFieldConfig<T>
  | CheckboxFieldConfig<T>
  | CustomFieldConfig<T>;

export type FormProps<T extends FieldValues = FieldValues> = {
  schema?: z.ZodType<T>;
  defaultValues?: DefaultValues<T>;
  fields: FormFieldConfig<T>[];
  onSubmit: (data: T) => void | Promise<void>;
  submitButtonText?: string;
  submitButtonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  submitButtonSize?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  className?: string;
  formClassName?: string;
  isLoading?: boolean;
  renderSubmitButton?: (form: UseFormReturn<T>) => React.ReactNode;
};

function renderField<T extends FieldValues>(
  fieldConfig: FormFieldConfig<T>,
  field: any,
  form: UseFormReturn<T>
) {
  const { name, label, placeholder, required, disabled, className } =
    fieldConfig;

  const error = form.formState.errors[fieldConfig.name]?.message as
    | string
    | undefined;

  const commonProps = {
    id: name,
    label,
    placeholder,
    required,
    disabled: disabled || field.disabled,
    className,
    error,
  };

  switch (fieldConfig.type) {
    case "text":
      return <TextInput {...commonProps} {...field} register={field} />;
    case "email":
      return <EmailInput {...commonProps} {...field} register={field} />;
    case "password":
      return <PasswordInput {...commonProps} {...field} register={field} />;
    case "number":
      return <IntegerInput {...commonProps} {...field} register={field} />;
    case "textarea":
      return (
        <TextAreaInput {...commonProps} {...field} rows={fieldConfig.rows} />
      );
    case "select":
      return (
        <SelectInput
          {...commonProps}
          options={fieldConfig.options}
          defaultValue={field.value || ""}
          onValueChange={field.onChange}
          isLoading={fieldConfig.isLoading}
        />
      );
    case "switch":
      return (
        <SwitchInput
          {...commonProps}
          {...field}
          checked={field.value}
          register={field}
        />
      );
    case "checkbox":
      return <CheckboxInput {...commonProps} {...field} register={field} />;
    case "custom":
      return fieldConfig.render(field, form);
    default:
      return null;
  }
}

/**
 * ReusableForm - A flexible, type-safe form component that works with react-hook-form and Zod validation.
 *
 * @example
 * ```tsx
 * import { z } from "zod";
 * import { ReusableForm } from "@/design-system/components/Form";
 *
 * const schema = z.object({
 *   email: z.string().email("Invalid email"),
 *   password: z.string().min(8, "Password must be at least 8 characters"),
 * });
 *
 * type FormData = z.infer<typeof schema>;
 *
 * function MyForm() {
 *   return (
 *     <ReusableForm<FormData>
 *       schema={schema}
 *       fields={[
 *         { type: "email", name: "email", label: "Email", required: true },
 *         { type: "password", name: "password", label: "Password", required: true },
 *       ]}
 *       onSubmit={(data) => console.log(data)}
 *       submitButtonText="Sign In"
 *     />
 *   );
 * }
 * ```
 */
export function Form<T extends FieldValues = FieldValues>({
  schema,
  defaultValues,
  fields,
  onSubmit,
  submitButtonText = "Submit",
  submitButtonVariant = "default",
  submitButtonSize = "default",
  className,
  formClassName,
  isLoading = false,
  renderSubmitButton,
}: FormProps<T>) {
  const form = useForm<T>({
    // @ts-expect-error - zodResolver type compatibility issue with zod v4
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
  }) as unknown as UseFormReturn<T>;

  const handleSubmit = form.handleSubmit(async (data: T) => {
    await onSubmit(data);
  });

  return (
    <FormComponent {...form}>
      <form onSubmit={handleSubmit} className={formClassName} noValidate>
        <div className={cn("flex flex-col gap-4", className)}>
          {fields.map((fieldConfig) => (
            <FormField
              key={fieldConfig.name}
              control={form.control}
              name={fieldConfig.name}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {renderField(fieldConfig, field, form)}
                  </FormControl>
                  {fieldConfig.description && (
                    <FormDescription>{fieldConfig.description}</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        {renderSubmitButton ? (
          renderSubmitButton(form)
        ) : (
          <Button
            type="submit"
            variant={submitButtonVariant}
            size={submitButtonSize}
            disabled={isLoading || form.formState.isSubmitting}
            className="w-full mt-6">
            {isLoading || form.formState.isSubmitting
              ? "Submitting..."
              : submitButtonText}
          </Button>
        )}
      </form>
    </FormComponent>
  );
}
