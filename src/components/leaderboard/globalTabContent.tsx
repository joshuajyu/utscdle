"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GlobalChart } from "./globalChart";
export function GlobalTabContent() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Global Leaderboard</CardTitle>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-56 pl-3 text-left font-normal ml-4",
                !selectedDate && "text-muted-foreground"
              )}
            >
              {selectedDate ? (
                format(selectedDate, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </CardHeader>
      <CardContent className="space-y-2">
        <GlobalChart />
      </CardContent>
      <CardFooter>
        {/* Add footer content if needed */}
      </CardFooter>
    </Card>
  );
}
