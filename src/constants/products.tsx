import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://celeb-img-clf.streamlit.app/",
    title: "First celebrity image classifier",
    description:
      "Created a deep learning model to classify celebrity images using CNNs (Convolutional Neural Networks) RestNet50.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Python", "Torchvision", "Pillow", "Pytorch"],
    slug: "First-celebrity-image-classifier",
    content: (
      <div>
        <p>
          Created a deep learning model to classify celebrity images using CNNs
          (Convolutional Neural Networks) RestNet50.{" "}
        </p>
        <p>
          Trained the model on a dataset of celebrity images and deployed it
          using Streamlit for user interaction.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://bangalore-house-price.streamlit.app/",
    title: "Bangalore house price prediction",
    description:
      "Developed a Linear Regression model to predict house prices in Bangalore using Python and Streamlit.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Pickle"],
    slug: "Bangalore-house-price-prediction",
    content: (
      <div>
        <p>
          Developed a Linear Regression model to predict house prices in
          Bangalore using Python and Streamlit.{" "}
        </p>
        <p>
          Implemented data preprocessing, feature engineering, and model
          evaluation to improve accuracy.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://penguins-classifier.streamlit.app/",
    title: "Penguins classifier",
    description:
      "Built a RandomForestClassifier to distinguish penguin species based on physical measurements.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Python", "scikit-learn", "Matplotlib", "Streamlit", "Pickle"],
    slug: "Penguins-classifier",
    content: (
      <div>
        <p>
          Built a RandomForestClassifier to distinguish penguin species based on
          physical measurements.{" "}
        </p>
        <p>
          Experimented with multiple classification algorithms such as Random
          Forest and Logistic Regression.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Plant Disease Detection",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Python", "scikit-learn", "Matplotlib", "Streamlit", "Pickle"],
    slug: "plant-disease-detection",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
