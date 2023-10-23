"use client";

import { NavbarItem } from "@nextui-org/navbar";
import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { useUser } from "@clerk/nextjs";
export default function NavbarItems() {
  const { user } = useUser();
  return (
    <ul className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems.map((item) => {
        if (item.authRequired && !user) {
          return null;
        }
        if (item.label === "Sign in" && user) {
          return null;
        }
        return (
          <NavbarItem as="li" key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        );
      })}
    </ul>
  );
}
