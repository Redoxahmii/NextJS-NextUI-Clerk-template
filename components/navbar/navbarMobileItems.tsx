"use client";

import { siteConfig } from "@/config/site";
import { useUser } from "@clerk/nextjs";
import { Link } from "@nextui-org/link";
import { NavbarMenuItem } from "@nextui-org/navbar";
import React from "react";

export default function NavbarMobileItems() {
  const { user } = useUser();
  return (
    <div className="mx-4 mt-2 flex flex-col gap-2">
      {siteConfig.navItems.map((item, index) => {
        if (item.authRequired && !user) {
          return null;
        }
        if (item.label === "Sign in" && user) {
          return null;
        }
        return (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === siteConfig.navItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        );
      })}
    </div>
  );
}
