import { Button } from "./ui/button";
import { Dialog } from "./ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface SignInPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInPopup: React.FC<SignInPopupProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>Sign in to your account</DialogDescription>
        </DialogHeader>
        <Label>
          Email
          <Input type="email" />
        </Label>
        <Label>
          Password
          <Input type="password" />
        </Label>
        <Button>Sign In</Button>
      </DialogContent>
    </Dialog>

  );
}

export default SignInPopup;
