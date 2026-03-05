import { Card, CardContent, CardTitle } from "./ui/card"

interface SummaryCardprops {
  title: string,
  count: number,
  color?: "blue" | "green" | "red" | "yellow"
}

export const SummaryCard = ({ title, count, color = "blue" }: SummaryCardprops) => {
  return (
    <Card>
      <CardContent className={`space-y-1 text-center text-2xl text-${color}-500`}>
        <CardTitle >{title}</CardTitle>
        <CardTitle>{count}</CardTitle>
      </CardContent>
    </Card>
  )
}
