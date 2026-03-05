import { Card, CardContent, CardTitle } from "./ui/card"

const colors = {
  blue: "blue-500",
  green: "green-500",
  red: "red-500",
  yellow: "yellow-500"
}

interface SummaryCardprops {
  title: string,
  count: number,
  color?: "blue" | "green" | "red" | "yellow"
}

export const SummaryCard = ({ title, count, color = "blue" }: SummaryCardprops) => {
  return (
    <Card className={`border border-${colors[color]}`}>
      <CardContent className={`space-y-1 text-center text-2xl text-${colors[color]}`}>
        <CardTitle >{title}</CardTitle>
        <CardTitle>{count}</CardTitle>
      </CardContent>
    </Card>
  )
}
