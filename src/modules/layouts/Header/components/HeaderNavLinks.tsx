import {
  BaseLink,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  TooltipTrigger,
} from "@/design-system/components";
import { Tooltip } from "@/design-system/components/Tooltip";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "../../data";

type HeaderNavLinksProps = {
  classes?: {
    wrapper?: string;
    link?: string;
    menuTrigger?: string;
    menuContent?: string;
    menuItem?: string;
  };
};

export function HeaderNavLinks({ classes }: HeaderNavLinksProps) {
  return (
    <ul className={cn("flex items-center gap-4 mx-auto", classes?.wrapper)}>
      {NAV_LINKS.map((link) => {
        const key = link.href ?? link.label;
        const linkStyles =
          "cursor-pointer hover:text-primary transition-colors duration-300";

        if (link.href) {
          return (
            <li key={key}>
              <Tooltip content={link.label}>
                <BaseLink
                  to={link.href}
                  className={cn(linkStyles, classes?.link)}>
                  {link.label}
                </BaseLink>
              </Tooltip>
            </li>
          );
        }

        return (
          <DropdownMenu key={key}>
            <Tooltip content={link.label}>
              <DropdownMenuTrigger
                asChild
                className={cn(linkStyles, classes?.menuTrigger)}>
                <li>{link.label}</li>
              </DropdownMenuTrigger>
            </Tooltip>
            <DropdownMenuContent className={classes?.menuContent}>
              {link.children?.map((child) => (
                <DropdownMenuItem
                  key={child.href ?? child.label}
                  className={classes?.menuItem}>
                  <Tooltip content={child.label}>
                    <TooltipTrigger asChild>
                      <BaseLink to={child.href ?? ""}>{child.label}</BaseLink>
                    </TooltipTrigger>
                  </Tooltip>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      })}
    </ul>
  );
}
