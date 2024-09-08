import type { epidemicResponse } from "@/types/api";
import ColumnChart from "@/components/column-chart";
import PieChart from "@/components/pie-chart";
import { Row, Col } from "antd";

export default async function Home() {
  const getEpidemicData = await fetch(
    "https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_PCRcountByDay",
  );
  const epidemicData = (await getEpidemicData.json()) as epidemicResponse;
  console.log(epidemicData);

  return (
    <Row>
      <Col span={12}>
        <ColumnChart epidemicData={epidemicData} />
      </Col>
      <Col span={12}>
        <PieChart epidemicData={epidemicData} />
      </Col>
    </Row>
  );
}
