import { Badge } from "./ui/badge";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"

interface JobCalendarCardProps {
  title: "Trabalhos de Hoje" | "Proximos Trabalhos",
  jobsCount?: number;
}


export const JobCalendarCard = ({ title, jobsCount = 0 }: JobCalendarCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction><Badge>{jobsCount}</Badge></CardAction>
      </CardHeader>
      <Separator />
      <CardContent>
      </CardContent>
    </Card>
  )
}
