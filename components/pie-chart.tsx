"use client";

import type { epidemicResponse } from "@/types/api";
import { useEffect, useRef } from "react";
import { renderPieChart } from "@/utils/charts";

interface PieChartProps {
  epidemicData: epidemicResponse;
}

export default function PieChart({ epidemicData }: PieChartProps) {
  const container = useRef<HTMLDivElement>(null);
  const chart = useRef<ReturnType<typeof renderPieChart>>(null);

  useEffect(() => {
    if (!chart.current) {
      chart.current = renderPieChart(container.current, epidemicData.results);
    }
  }, []);

  return <div ref={container}></div>;
}
