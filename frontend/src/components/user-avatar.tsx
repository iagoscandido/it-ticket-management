import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface UserAvatarProps {
  imageSrc: string;
  alt?: string;
  fallback?: string
  className?: string
}

export const UserAvatar = ({ imageSrc, alt, fallback, className }: UserAvatarProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="rounded-full">
          <Avatar className={className}>
            <AvatarImage src={imageSrc} alt={alt} />
            <AvatarFallback>{fallback ? fallback : "AV"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuSeparator />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
