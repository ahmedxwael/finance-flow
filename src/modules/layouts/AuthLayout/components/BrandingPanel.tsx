import { BaseLink } from "@/design-system/components";
import { URLS } from "@/shared/urls";
import { DecorativeBackground } from "./DecorativeBackground";
import { FeatureList } from "./FeatureList";

export function BrandingPanel() {
  return (
    <div className="hidden lg:flex lg:flex-1 relative overflow-hidden bg-linear-to-br from-primary/10 via-secondary/10 to-primary/5">
      <DecorativeBackground />

      <div className="relative z-10 flex flex-col justify-between p-12 w-full">
        <BaseLink
          to={URLS.home}
          className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          Finance Flow
        </BaseLink>

        <div className="max-w-md space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            Take control of your finances
          </h1>
          <p className="text-lg text-muted-foreground">
            Track expenses, manage budgets, set goals, and achieve financial
            freedom - all in one simple, beautiful platform.
          </p>
          <FeatureList />
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Finance Flow. All rights reserved.
        </div>
      </div>
    </div>
  );
}
