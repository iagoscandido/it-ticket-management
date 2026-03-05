import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A simple pie chart"

type Data = {
  status: "concluido" | "cancelado" | "improdutivo",
  count: number
  fill: string
}

const chartData: Data[] = [
  { status: "concluido", count: 3, fill: "var(--color-concluido)" },
  { status: "cancelado", count: 1, fill: "var(--color-cancelado)" },
  { status: "improdutivo", count: 1, fill: "var(--color-improdutivo)" }
]

const chartConfig = {
  count: {
    label: "Atendimentos"
  },
  concluido: {
    label: "Concluidos",
    color: "var(--chart-1)"
  },
  cancelado: {
    label: "Cancelados",
    color: "var(--chart-2)"
  },
  improdutivo: {
    label: "Improdutivos",
    color: "var(--chart-3)"
  }
} satisfies ChartConfig

export const JobsChartPie = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Atendimentos</CardTitle>
        <CardDescription>2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="count" nameKey="status" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
