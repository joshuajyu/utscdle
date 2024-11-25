"use client"; // Enables client-side rendering for this component

import { useState, useEffect, useRef } from "react"; // Import necessary React hooks
import { HowToPlay } from "./howToPlay";

export default function Countdown() {
    // State to manage the time elapsed (start from 0)
    const [isActive, setIsActive] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null); // Timer reference to store interval ID

    // useEffect hook to start the timer when the component mounts
    useEffect(() => {
        // Start counting up immediately when the page is loaded
        //if (isActive) {
            timerRef.current = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1); // Increment time every second
            }, 1000); // Interval of 1 second
        //}

        // Cleanup function to clear the interval when the component is unmounted
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []); // Empty dependency array to run the effect only once, on mount

    // Function to format the time elapsed into mm:ss format
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60); // Calculate minutes
        const seconds = time % 60; // Calculate seconds
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    // JSX return statement rendering the Count Up timer UI
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-white">
                {formatTime(timeElapsed)} {/* Display the formatted time */}
            </div>
        </div>
    );
}
