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
          <TableRow key={index}>
            <TableCell className="font-medium">{attempt.attempt}</TableCell>
            <TableCell className="font-medium text-right">
              {attempt.distance.toFixed(2)} m
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AttemptTable;
