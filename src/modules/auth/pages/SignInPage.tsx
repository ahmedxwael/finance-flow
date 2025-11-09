import { SignInForm } from "../components";

export function SignInPage() {
  return (
    <section className="">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Sign In
          </h1>
        </div>
        <SignInForm />
      </div>
    </section>
  );
}
