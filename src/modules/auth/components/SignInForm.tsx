import {
  BaseLink,
  Form,
  toastError,
  toastSuccess,
} from "@/design-system/components";
import { URLS } from "@/shared/urls";
import { useSignIn } from "../hooks";
import { signInSchema } from "../validators";

export function SignInForm() {
  const { signIn } = useSignIn({
    onSuccess: () => {
      toastSuccess("Sign in successful");
      location.href = URLS.dashboard;
    },
    onError: (error) => {
      toastError(error);
    },
  });

  return (
    <div className="space-y-6">
      <Form
        schema={signInSchema}
        fields={[
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
        ]}
        onSubmit={signIn}
        submitButtonText="Sign In"
      />

      <div className="text-center text-sm">
        <span className="text-muted-foreground">Don't have an account? </span>
        <BaseLink
          to={URLS.auth.signUp}
          className="text-primary font-medium hover:underline">
          Sign up
        </BaseLink>
      </div>
    </div>
  );
}
