"use client";

import type { epidemicResponse } from "@/types/api";
import { useEffect, useRef } from "react";
import { renderBarChart } from "@/utils/charts";

interface ColumnChartProps {
  epidemicData: epidemicResponse;
}

export default function ColumnChart({ epidemicData }: ColumnChartProps) {
  const container = useRef<HTMLDivElement>(null);
  const chart = useRef<ReturnType<typeof renderBarChart>>(null);

  useEffect(() => {
    if (!chart.current) {
      chart.current = renderBarChart(container.current, epidemicData.results);
    }
  }, []);

  return <div ref={container}></div>;
}
