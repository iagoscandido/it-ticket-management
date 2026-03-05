import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"

export type User = {
  name: string,
  email: string,
  phoneNumber: string
}

interface UserCardProps {
  user: User
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card>
      <CardContent>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>
          <p>Email: {user.email}</p>
          <p>Phone number: {user.phoneNumber}</p>
        </CardDescription>
      </CardContent>
    </Card>
  )
}
