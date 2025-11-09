import { BaseLink, Form } from "@/design-system/components";
import { URLS } from "@/shared/urls";
import { signInSchema } from "../validators";

export function SignInForm() {
  return (
    <div className="space-y-6">
      <Form
        schema={signInSchema}
        fields={[
          {
            type: "email",
            name: "email",
            label: "Email",
            placeholder: "Enter your email",
          },
          {
            type: "password",
            name: "password",
            label: "Password",
            placeholder: "Enter your password",
          },
        ]}
        onSubmit={(data) => {
          console.log(data);
        }}
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
