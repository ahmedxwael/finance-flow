import { cn } from "@/lib/utils";
import { Link, type LinkProps } from "react-router";

type BaseLinkProps = LinkProps;
export function BaseLink({ children, className, ...props }: BaseLinkProps) {
  return (
    <Link className={cn(className)} {...props}>
      {children}
    </Link>
  );
}
