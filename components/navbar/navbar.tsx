import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon } from "@/components/icons";
import NavbarUserButton from "../navbarUserButton";
import { FacebookIcon, GraduationCapIcon } from "lucide-react";
import NavbarItems from "./navbarItems";
import NavbarMobileItems from "./navbarMobileItems";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <GraduationCapIcon size={25} />
            <p className="font-bold text-inherit">EduMastery</p>
          </NextLink>
        </NavbarBrand>
        <NavbarItems />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.facebook}
            aria-label="Facebook"
          >
            <FacebookIcon size={22} className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarUserButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarUserButton />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu as="div">
        <NavbarMobileItems />
      </NavbarMenu>
    </NextUINavbar>
  );
};
