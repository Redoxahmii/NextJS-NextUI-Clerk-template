import Image from "next/image";
import hero from "../public/hero.jpg";
import { Button } from "@nextui-org/button";
import { subtitle, title } from "@/components/primitives";
import { UserPlus2 } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>{/* <About /> */}</section>
    </>
  );
}

const Hero = () => {
  return (
    <div className=" flex lg:mt-10 items-center justify-between md:flex-row flex-col">
      <div className="flex flex-col w-full max-w-md gap-4 lg:mt-5 lg:mb-0 mb-10">
        <h1 className={title({ size: "sm" })}>
          Unleash Your Potential with{" "}
          <span className={title({ color: "blue", size: "sm" })}>
            EduMastery
          </span>
        </h1>
        <p className={subtitle()}>
          Welcome to a world where learning knows no boundaries, where knowledge
          and mastery are within your reach. Introducing EduMastery, your
          gateway to a smarter, brighter future.
        </p>
        <div>
          <Button
            color="primary"
            as={Link}
            href="/sign-up"
            endContent={<UserPlus2 size={20} />}
          >
            Sign up
          </Button>
        </div>
      </div>
      <Image
        src={hero}
        className="rounded-xl"
        priority
        width={550}
        height={550}
        alt="Hero"
      />
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1 className="text-purple-600">About</h1>
    </div>
  );
};
