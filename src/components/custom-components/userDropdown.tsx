"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

export default function UserDropdown() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return null;
  if (!session) return null; // Hide when not logged in

  const user = session?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
        <Avatar className="w-8 h-8">
          <AvatarImage src={user?.image || undefined} />
          <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">{user?.name}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 mt-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/settings")}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-red-500"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
