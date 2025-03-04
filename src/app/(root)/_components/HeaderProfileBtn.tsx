"use client";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import LoginButton from "@/components/LoginButton";


function HeaderProfileBtn() {
  return (
    <div>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>

      <SignedOut>
        <LoginButton/>
      </SignedOut>
    </div>
  );
}

export default HeaderProfileBtn;
