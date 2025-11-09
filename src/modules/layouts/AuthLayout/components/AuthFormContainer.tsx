import { BaseLink } from "@/design-system/components";
import { URLS } from "@/shared/urls";
import { Outlet } from "react-router";

export function AuthFormContainer() {
  return (
    <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="lg:hidden text-center">
          <BaseLink
            to={URLS.home}
            className="inline-block text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            Finance Flow
          </BaseLink>
        </div>

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
