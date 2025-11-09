import { SignInForm } from "../components";

export function SignInPage() {
  return (
    <section className="container flex flex-col gap-6 flex-1">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-center">
        Sign In
      </h1>
      <SignInForm />
    </section>
  );
}
