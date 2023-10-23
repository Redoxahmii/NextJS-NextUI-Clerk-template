export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LMS System",
  description: "LMS system for learning.",
  navItems: [
    {
      label: "Home",
      href: "/",
      authRequired: false,
    },
    {
      label: "About",
      href: "/about",
      authRequired: false,
    },
    {
      label: "Sign in",
      href: "/sign-in",
      authRequired: false,
    },
    {
      label: "User Profile",
      href: "/user-profile",
      authRequired: true,
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Signup",
      href: "/sign-up",
    },
    {
      label: "Sign in",
      href: "/sign-in",
    },
    {
      label: "User Profile",
      href: "/user-profile",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    facebook: "https://facebook.com/lms",
  },
};
