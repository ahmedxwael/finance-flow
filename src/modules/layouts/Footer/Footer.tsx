import { BaseLink } from "@/design-system/components";
import { URLS } from "@/shared/urls";
import { NAV_LINKS } from "../data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  // TODO: Replace with actual authentication check
  const isSignedIn = false;

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <BaseLink
              to={URLS.home}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              Finance Flow
            </BaseLink>
            <p className="text-sm text-muted-foreground max-w-xs">
              Take control of your finances with our comprehensive platform for
              managing expenses, budgets, and financial goals.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => {
                if (link.href) {
                  return (
                    <li key={link.href}>
                      <BaseLink
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </BaseLink>
                    </li>
                  );
                }
                if (link.children) {
                  return link.children.map((child) => (
                    <li key={child.href}>
                      <BaseLink
                        to={child.href ?? ""}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {child.label}
                      </BaseLink>
                    </li>
                  ));
                }
                return null;
              })}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-3">
              <li>
                <BaseLink
                  to={URLS.privacyPolicy}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </BaseLink>
              </li>
              <li>
                <BaseLink
                  to={URLS.termsAndConditions}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </BaseLink>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Account</h3>
            <ul className="space-y-3">
              {isSignedIn ? (
                <>
                  <li>
                    <BaseLink
                      to={URLS.dashboard}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Dashboard
                    </BaseLink>
                  </li>
                  <li>
                    <BaseLink
                      to={URLS.profile.root}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Profile
                    </BaseLink>
                  </li>
                  <li>
                    <BaseLink
                      to={URLS.profile.settings}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Settings
                    </BaseLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <BaseLink
                      to={URLS.auth.signIn}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Sign In
                    </BaseLink>
                  </li>
                  <li>
                    <BaseLink
                      to={URLS.auth.signUp}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Sign Up
                    </BaseLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Finance Flow. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ for better financial management
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
