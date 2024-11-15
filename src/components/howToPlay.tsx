"use client"

import { useEffect, useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./alertDialog"

const HowToPlay = () => {
    const [open, setOpen] = useState(false);

    // Use effect to trigger the dialog when the page loads
    useEffect(() => {
        setOpen(true); // This will open the dialog as soon as the page loads
    }, []);
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>How To Play</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>Click on the map to place a marker, then click "<strong>Check Distance</strong>" to submit your guess on the picture's location!</AlertDialogDescription>
                <AlertDialogDescription>A quarter of the picture will unpixelate after each attempt.</AlertDialogDescription>
                <AlertDialogDescription>You have a total of <strong>3 guesses</strong> with the following scoring scheme:</AlertDialogDescription>
                <AlertDialogDescription>1 guess = +100 points</AlertDialogDescription>
                <AlertDialogDescription>2 guesses = +70 points</AlertDialogDescription>
                <AlertDialogDescription>3 guesses = +20 points</AlertDialogDescription>
                <AlertDialogDescription>NOTE: Pin must be within <strong>20m</strong> of the location to be correct.</AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setOpen(false)}>OK</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export { HowToPlay };