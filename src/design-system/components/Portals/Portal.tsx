import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";

type PortalProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  loading?: boolean;
  classes?: {
    dialog?: string;
    dialogContent?: string;
    title?: string;
    description?: string;
  };
};

export function Portal({ children, title, description, classes }: PortalProps) {
  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent className={cn(classes?.dialogContent)}>
        <div className="flex flex-col gap-2">
          <DialogTitle className={cn(classes?.title)}>{title}</DialogTitle>
          <DialogDescription
            className={cn("text-muted-foreground", classes?.description)}>
            {description}
          </DialogDescription>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
}
