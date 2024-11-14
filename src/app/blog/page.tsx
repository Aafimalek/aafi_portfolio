import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Aafi Malek",
  description:
    "Aafi Malek is a Machine Learning Engineer and loves working remotely.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <div className="h-[65vh] flex flex-col justify-center items-center">
        <span className="text-4xl">📝</span>
        <Heading className="font-black pb-4">Coming Soon....</Heading>
      </div>
    </Container>
  );
}
