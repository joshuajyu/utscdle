"use client";

import { useMapContext } from "@/hooks/mapProvider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const rowColors = (attempt: number, threshold: number) => {
  if (attempt <= threshold) {
    return "bg-green-500";
  } else {
    return "bg-red-500";
  }
}

const rowColorsOnHover = (attempt: number, threshold: number) => {
  if (attempt <= threshold) {
    return "hover:bg-green-600";
  } else {
    return "hover:bg-red-600";
  }
}

const AttemptTable: React.FC = () => {
  const { attempts } = useMapContext();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Attempt</TableHead>
          <TableHead className="text-right">Distance (m)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {attempts.map((attempt, index) => (
          <TableRow key={index} className={`${rowColors(Number(attempt.distance.toFixed(2)), 20)} hover:${rowColorsOnHover(Number(attempt.distance.toFixed(2)), 20)}`}>
            <TableCell className="font-medium rounded-s-full">{attempt.attempt}</TableCell>
            <TableCell className="font-medium text-right rounded-e-full">
              {attempt.distance.toFixed(2)} m
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AttemptTable;
