import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile",
  description: "Welcome to your user profile",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function userProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
