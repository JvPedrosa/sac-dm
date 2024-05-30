import Chart from "react-apexcharts";
import { SacDmProps } from "../../SacDm/types";
import { EmptyData } from "../../../components/EmptyData";

export const SacDmDevice = ({
  deviceId,
  sacDm,
}: {
  deviceId: number | null;
  sacDm: SacDmProps[];
}) => {
  if (!deviceId) {
    return null;
  }

  const optionsChart = {
    chart: {
      id: "device-metrics",
    },
    xaxis: {
      categories: sacDm.map((item: SacDmProps) => item.timestamp),
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const seriesChart = [
    {
      name: "Valor",
      data: sacDm.map((item: SacDmProps) => +item.value.toFixed(8)),
    },
  ];

  return (
    <div style={{ zIndex: 0, position: "relative" }}>
      <Chart
        options={optionsChart}
        series={seriesChart}
        type="line"
        height={350}
      />
      {sacDm.length === 0 && (
        <EmptyData message="Nenhum dado encontrado para o dispositivo selecionado" />
      )}
    </div>
  );
};