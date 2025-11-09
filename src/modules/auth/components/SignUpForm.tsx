import {
  BaseLink,
  Form,
  toastError,
  toastSuccess,
} from "@/design-system/components";
import { URLS } from "@/shared/urls";
import { useSignUp } from "../hooks";
import { signUpSchema } from "../validators";

export function SignUpForm() {
  const { signUp } = useSignUp({
    onSuccess: () => {
      toastSuccess("Sign up successful");
      location.href = URLS.dashboard;
    },
    onError: (error) => {
      toastError(error);
    },
  });

  return (
    <div className="space-y-6">
      <Form
        schema={signUpSchema}
        fields={[
          {
            type: "text",
            name: "name",
            required: true,
            label: "Name",
            placeholder: "Enter your name",
          },
          {
            type: "email",
            name: "email",
            required: true,
            label: "Email",
            placeholder: "Enter your email",
          },
          {
            type: "password",
            name: "password",
            required: true,
            label: "Password",
            placeholder: "Enter your password",
          },
          {
            type: "password",
            name: "confirmPassword",
            required: true,
            label: "Confirm Password",
            placeholder: "Confirm your password",
          },
        ]}
        onSubmit={signUp}
        submitButtonText="Sign Up"
      />
      <div className="text-center text-sm">
        <span className="text-muted-foreground">Already have an account? </span>
        <BaseLink
          to={URLS.auth.signIn}
          className="text-primary font-medium hover:underline">
          Sign in
        </BaseLink>
      </div>
    </div>
  );
}
