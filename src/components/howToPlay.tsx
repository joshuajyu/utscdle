"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

type HowToPlayProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const HowToPlay = ({ open, setOpen }: HowToPlayProps) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="border-slate-300 border-4">
        <AlertDialogHeader>
          <AlertDialogTitle>How To Play</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Click on the map to place a marker, then click &quot;
          <strong>Check Distance</strong>&quot; to submit your guess on the
          picture&apos;s location!
        </AlertDialogDescription>
        <AlertDialogDescription>
          A quarter of the picture will unpixelate after each attempt.
        </AlertDialogDescription>
        <AlertDialogDescription>
          You have a total of <strong>3 guesses</strong> with the following
          scoring scheme:
        </AlertDialogDescription>
        <AlertDialogDescription>1 guess = +100 points</AlertDialogDescription>
        <AlertDialogDescription>2 guesses = +70 points</AlertDialogDescription>
        <AlertDialogDescription>3 guesses = +20 points</AlertDialogDescription>
        <AlertDialogDescription>
          NOTE: Pin must be within <strong>20m</strong> of the location to be
          correct.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => setOpen(false)}>
            Let&apos;s Play
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { HowToPlay };
