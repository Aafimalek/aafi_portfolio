"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hello! I’m Aafi, currently pursuing my Bachelor’s degree in Artificial
          Intelligence and Machine Learning in Gujarat, India. My fascination
          with technology started young, but it was discovering the potential of
          AI and ML that truly hooked me. Since then, I’ve been diving deep into
          the field, aiming to understand and harness the power of machine
          learning to solve real-world challenges.
        </Paragraph>
        <Paragraph className=" mt-4">
          Over the past few years, I’ve focused on building a strong foundation
          in AI and ML. I’ve completed projects in supervised learning,
          classification, and even explored optimization techniques and image
          processing. Alongside my coursework, I’ve taken online certifications
          to push my skills further, including foundational courses by Andrew
          Ng, and I’m actively building more hands-on experience through
          internships and personal projects.
        </Paragraph>

        <Paragraph className=" mt-4">
          In addition to AI, I’m passionate about programming and am constantly
          working on new ways to improve my coding skills. I’m a quick learner
          and always excited to work on challenging problems that push my
          creativity and technical ability.
        </Paragraph>
        <Paragraph className=" mt-4">
          Outside of my academic and professional pursuits, I’m a big movie
          lover! Whether it’s exploring different genres or appreciating the art
          of storytelling, films are my go-to escape. As I move forward, I’m
          eager to connect with like-minded people in the AI and tech community
          and take on new challenges that help me grow and contribute
          meaningfully.
        </Paragraph>
      </div>
    </div>
  );
}
