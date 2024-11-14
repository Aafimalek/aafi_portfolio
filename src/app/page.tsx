import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import AboutPage from "./about/page";
import Blog from "./blog/page";
import Projects from "./contact/page";

export default function Home() {
  return (
    <>
      <Container>
        <span className="text-4xl">👋</span>
        <Heading className="font-black text-white">
          Hello there! I&apos;m Aafi
        </Heading>
        <Paragraph className="max-w-xl mt-4 text-white">
          I&apos;m a pre-final year undergraduate with a major in Artifician Intelligence & Machine Learning from L.D. College of Engineering
          Gujarat,India.
        </Paragraph>
        
        <Paragraph className="max-w-xl mt-4 text-white">
          I&apos;m deeply interested in the world of 
          machine learning, where I&apos;m constantly learning and building
          hands-on skills. I enjoy programming, exploring real-world AI
          applications, and am driven to contribute impactful solutions in the
          field. My goal is to excel in Machine Learning engineering, aiming for a strong
          start in my career with a meaningful role by 2026. Apart from tech,
          I&apos;m a film enthusiast and love diving into the stories they
          tell!
        </Paragraph>
        <TechStack />
        <Heading
          as="h2"
          className="font-black text-white text-lg md:text-lg lg:text-lg mt-20 mb-4"
        >
          What I&apos;ve been working on
        </Heading>
        <Products />
      </Container>  
    </>
  );
}
