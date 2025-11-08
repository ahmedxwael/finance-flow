import { BaseInput, type BaseInputProps } from "./BaseInput";

type TextInputProps = BaseInputProps;

export function TextInput(props: TextInputProps) {
  return <BaseInput type="text" {...props} />;
}
