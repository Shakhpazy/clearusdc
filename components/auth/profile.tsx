import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

function Profile() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default Profile;