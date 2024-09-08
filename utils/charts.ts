import { epidemicResult } from "@/types/api";
import { Runtime, corelib, extend } from "@antv/g2";

interface ChartData {
  day: string;
  cases: number;
}

export function renderBarChart(
  container: HTMLElement | null,
  epidemicData: epidemicResult[] | undefined,
) {
  if (!container || !epidemicData) {
    return null;
  }

  const Chart = extend(Runtime, { ...corelib() });

  const chart = new Chart({
    container,
    autoFit: true,
  });

  const data: ChartData[] = epidemicData.map((entry) => ({
    day: entry.date ?? "",
    cases: entry.metric_value ?? 0,
  }));

  chart
    .interval()
    .data(data)
    .encode("x", "day")
    .encode("y", "cases")
    .encode("key", "day");

  chart.render();

  return chart;
}

export function renderPieChart(
  container: HTMLElement | null,
  epidemicData: epidemicResult[] | undefined,
) {
  if (!container || !epidemicData) {
    return null;
  }

  const Chart = extend(Runtime, { ...corelib() });

  const chart = new Chart({
    container,
    autoFit: true,
  });

  const data: ChartData[] = epidemicData.map((entry) => ({
    day: entry.date ?? "",
    cases: entry.metric_value ?? 0,
  }));

  chart.coordinate({ type: "theta", outerRadius: 0.8, innerRadius: 0.5 });

  chart
    .interval()
    .data(data)
    .transform({ type: "stackY" })
    .encode("y", "cases")
    .encode("color", "day")
    .legend("color", {
      position: "bottom",
      layout: { justifyContent: "center" },
    })
    .label({
      position: "outside",
      text: (data: ChartData) => data.cases,
    })
    .tooltip((data: ChartData) => ({
      name: data.day,
      value: data.cases,
    }));

  chart.render();

  return chart;
}
