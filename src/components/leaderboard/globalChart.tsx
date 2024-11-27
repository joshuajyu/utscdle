"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { username: "PixelHunter", score: 980 },
  { username: "CodeMaster", score: 950 },
  { username: "MapExplorer", score: 940 },
  { username: "GeoGuru", score: 930 },
  { username: "GuessWizard", score: 920 },
  { username: "TrailBlazer", score: 910 },
  { username: "Zoomer123", score: 900 },
  { username: "CampusSniper", score: 890 },
  { username: "SpotSeeker", score: 880 },
  { username: "LocationLegend", score: 870 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function GlobalChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 Ranking</CardTitle>
        <CardDescription>Top 10 ranking for selected date</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="username"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="score" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="score" layout="vertical" fill="#e21d48" radius={5}>
              <LabelList
                dataKey="username"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={16}
              />
              <LabelList
                dataKey="score"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={16}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
