import { AuthFormContainer, BrandingPanel } from "./AuthLayout/components";

export function AuthLayout() {
  return (
    <div className="relative min-h-screen flex">
      <BrandingPanel />
      <AuthFormContainer />
    </div>
  );
}
