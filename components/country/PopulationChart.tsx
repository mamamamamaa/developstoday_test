import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

import type { CountryPopulationType } from "@/types"

type Props = {
  data: CountryPopulationType[]
}
export const PopulationChart = ({ data }: Props) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-700">
      Population Over Time
    </h2>
    <LineChart
      width={700}
      height={300}
      data={data}
      className="mt-4 rounded-lg bg-white p-4 shadow-md"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  </div>
)
