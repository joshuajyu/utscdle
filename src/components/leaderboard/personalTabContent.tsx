"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { PersonalChart } from "./personalChart";

export function PersonalTabContent() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Personal Scores</CardTitle>
        <Select>
          <SelectTrigger className="w-48 ml-4">
            <SelectValue placeholder="Select a Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Last Week</SelectItem>
            <SelectItem value="month">Last Month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="space-y-2">
        <PersonalChart />
      </CardContent>
      <CardFooter>
        {/* Add footer content if needed */}
      </CardFooter>
    </Card>
  );
}
