import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SignUpForm } from "@/components/auth/signUpForm";

export function SignUpContent() {
  return (
    <DialogContent>
      <DialogHeader className="items-center">
        <DialogTitle>Sign Up</DialogTitle>
      </DialogHeader>
      <SignUpForm />
    </DialogContent>
  );
}
