import { SignUpForm } from "../components";

export function SignUpPage() {
  return (
    <section className="container flex flex-col gap-6 flex-1">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-center">
        Sign Up
      </h1>
      <SignUpForm />
    </section>
  );
}
