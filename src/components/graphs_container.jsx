import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import * as faker from "faker";
// to
// import * as faker from "@faker-js/faker";
import { faker } from "@faker-js/faker";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.float({ min: -1000, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.float({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Graph1() {
  return (
    <div className="h-full w-full bg-slate-200">
      <Line options={options} data={data} />
    </div>
  );
}
