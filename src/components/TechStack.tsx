import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Python",
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      className: "h-10 w-12",
    },
    {
      title: "Streamlit",
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
      className: "h-10 w-12",
    },
    {
      title: "numpy",
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      className: "h-10 w-12",
    },
    {
      title: "pandas",
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      className: "h-10 w-12",
    },
    {
      title: "matplotlib",
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
      className: "h-10 w-12",
    },
    {
      title: "scikit-learn",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
      className: "h-10 w-12",
    },
    {
      title: "pytorch",
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      className: "h-10 w-12",
    },
    {
      title: "tensorflow",
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      className: "h-10 w-12",
    },
    {
      title: "js",
      src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      className: "h-10 w-12",
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
