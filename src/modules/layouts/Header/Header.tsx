import { BaseLink } from "@/design-system/components";
import { Tooltip } from "@/design-system/components/Tooltip";
import { URLS } from "@/shared/urls";
import { HeaderNavLinks } from "./components";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/50 backdrop-blur-lg">
      <nav className="container flex items-center gap-4 lg:gap-8 py-6">
        {/* Logo */}
        <Tooltip content="Finance Flow">
          <BaseLink to={URLS.home} className="text-2xl font-bold text-primary">
            Finance Flow
          </BaseLink>
        </Tooltip>
        {/* Navigation links */}
        <HeaderNavLinks classes={{ wrapper: "hidden lg:flex" }} />
      </nav>
    </header>
  );
}
