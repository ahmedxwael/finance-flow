import { Loader } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

export function LoadingOverlay() {
  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent
        aria-describedby="loading-overlay"
        aria-labelledby="loading-overlay"
        tabIndex={undefined}
        className="bg-transparent border-none shadow-none justify-center items-center"
        closeButton={false}>
        <Loader size={32} className="animate-spin" />
        <DialogTitle className="sr-only">Loading...</DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
