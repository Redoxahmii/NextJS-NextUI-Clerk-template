"use client";

import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
const UserProfilePage = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className=" flex items-center justify-center">
      <UserProfile
        path="/user-profile"
        routing="path"
        appearance={{
          baseTheme: resolvedTheme === "dark" ? dark : undefined,
        }}
      />
    </div>
  );
};

export default UserProfilePage;
