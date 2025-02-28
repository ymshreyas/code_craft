"use client";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import React from "react";

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
        <SignInButton />
      </SignedOut>
    </div>
  );
}

export default HeaderProfileBtn;
