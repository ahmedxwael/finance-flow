import wavyLine from "@/assets/images/home/line.svg";
import { BaseLink } from "@/design-system/components";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/design-system/components/ui";
import { ArrowRight } from "@/design-system/icons";
import { URLS } from "@/shared/urls";
import { steps } from "../data";

export function GetStartedSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            It's easy to begin your journey toward better financial management.
          </p>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <img
            src={wavyLine}
            alt="line-wave"
            className="absolute z-0 top-0 left-0 w-full h-full hidden lg:block"
          />
          <div className="grid relative gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                      {step.number}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="mt-12 relative text-center">
            <Button asChild size="lg">
              <BaseLink to={URLS.auth.signUp}>
                Start Your Journey
                <ArrowRight className="ml-2 size-4" />
              </BaseLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
