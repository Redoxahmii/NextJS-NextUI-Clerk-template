"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import { UserPlus2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
export default function NavbarUserButton() {
  const { isSignedIn } = useUser();
  const { resolvedTheme } = useTheme();

  return (
    <>
      {!isSignedIn ? (
        <NavbarItem as="div" className="">
          <Button
            as={Link}
            className="text-sm font-normal"
            color="primary"
            href="/sign-up"
            endContent={<UserPlus2 size={20} />}
          >
            Sign up
          </Button>
        </NavbarItem>
      ) : (
        <NavbarItem as="div" className="">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              baseTheme: resolvedTheme === "dark" ? dark : undefined,
            }}
          />
        </NavbarItem>
      )}
    </>
  );
}
