import { BaseLink } from "@/design-system/components";
import { Button } from "@/design-system/components/ui";
import { ArrowRight, TrendingUp } from "@/design-system/icons";
import { URLS } from "@/shared/urls";

export function HeroSection() {
  // TODO: Replace with actual authentication check
  const isSignedIn = false;

  return (
    <section className="relative overflow-hidden border-b border-border bg-linear-to-b from-background to-muted/20 py-20 lg:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm">
            <TrendingUp className="size-4 text-primary" />
            <span className="text-muted-foreground">
              Take control of your finances
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Manage Your Money
            <span className="block text-primary">With Confidence</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Finance Flow helps you track expenses, manage budgets, set goals,
            and achieve financial freedom. All in one simple, beautiful
            platform.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {isSignedIn ? (
              <Button asChild size="lg" className="w-full sm:w-auto">
                <BaseLink to={URLS.dashboard}>
                  Go to Dashboard
                  <ArrowRight className="ml-2 size-4" />
                </BaseLink>
              </Button>
            ) : (
              <>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <BaseLink to={URLS.auth.signUp}>
                    Get Started Free
                    <ArrowRight className="ml-2 size-4" />
                  </BaseLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto">
                  <BaseLink to={URLS.dashboard}>View Dashboard</BaseLink>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 size-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 size-64 rounded-full bg-secondary/5 blur-3xl" />
      </div>
    </section>
  );
}
