"use client";

import { useEffect, useState, useContext } from "react";
import { Button } from "./ui/button";
import TimerContext from "@/hooks/timerContext";
interface GameOverlayProps {
  children: React.ReactNode;
}

const GameOverlay: React.FC<GameOverlayProps> = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const { startTimer } = useContext(TimerContext);

  useEffect(() => {
    const storedGameStarted = localStorage.getItem("gameStarted");
    if (storedGameStarted === "true") {
      setGameStarted(true);
    }
  }, []);

  const handleStartGame = () => {
    setGameStarted(true);
    localStorage.setItem("gameStarted", "true");
    startTimer();
  };

  if (gameStarted) {
    return <>{children}</>;
  } else {
    return (
      <div className="relative h-full w-full">
        {children}
        <div className="absolute inset-0 bg-zinc-800 flex items-start justify-center z-10">
          <Button onClick={handleStartGame}>Start Daily Challenge</Button>
        </div>
      </div>
    );
  }
};

export default GameOverlay;
