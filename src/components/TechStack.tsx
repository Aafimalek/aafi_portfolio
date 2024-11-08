import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Python",
      src: "/images/logos/python.png",
      className: "h-10 w-14",
    },
    {
      title: "Streamlit",
      src: "/images/logos/streamlit.jpeg",
      className: "h-10 w-10",
    },
    {
      title: "numpy",
      src: "/images/logos/numpy.png",
      className: "h-10 w-8",
    },
    {
      title: "pandas",
      src: "/images/logos/pandas.png",
      className: "h-10 w-10",
    },
    {
      title: "matplotlib",
      src: "/images/logos/matpotlib.jpeg",
      className: "h-10 w-12",
    },
    {
      title: "scikit-learn",
      src: "/images/logos/sci-kit.png",
      className: "h-10 w-24",
    },
    {
      title: "pytorch",
      src: "/images/logos/pytorch.jpeg",
      className: "h-10 w-24",
    },
    {
      title: "tensorflow",
      src: "/images/logos/tensorflow.png",
      className: "h-10 w-24",
    },
    {
      title: "js",
      src: "/images/logos/js.jpeg",
      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`225`}
            height={`225`}
            alt={item.title}
            className={twMerge("mx-3", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
