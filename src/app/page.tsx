import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black text-white">
        Hello there! I&apos;m Aafi
      </Heading>
      <Paragraph className="max-w-xl mt-4 text-white">
        I&apos;m a pre-final year undergraduate with a major in AI & ML from
        Gujarat,India.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-white">
        I&apos;m deeply interested in the world of artificial intelligence and
        machine learning, where I&apos;m constantly learning and building hands-on
        skills. I enjoy programming, exploring real-world AI applications, and
        am driven to contribute impactful solutions in the field. My goal is to
        excel in ML engineering, aiming for a strong start in my career with a
        meaningful role by 2026. Apart from tech, I&apos;m a movie enthusiast and
        love diving into the stories they tell!
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-white text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
