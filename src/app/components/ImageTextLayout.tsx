import React from "react";

interface ImageTextLayoutProps {
  img: string;
  title: string;
  subTitle: string;
  imgPosition: "left" | "right";
  description: string;
  advantages: string[];
}

const ImageTextLayout: React.FC<ImageTextLayoutProps> = ({
  img,
  title,
  subTitle,
  imgPosition,
  description,
  advantages,
}) => {
  const isImgLeft = imgPosition === "left";

  return (
    <section
      className="w-full py-20 px-4 sm:px-6 lg:px-8"
      id={`${title.toLowerCase().replace(/\s+/g, "-")}-section`}
    >
      <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mx-auto">
          <div
            className={`space-y-4 ${isImgLeft ? "lg:order-2" : "lg:order-1"}`}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
              {title}
            </h2>
            <h3 className="text-2xl font-oswald text-[#F54E00]">{subTitle}</h3>
            <p className="text-gray-700 md:text-base xl:text-lg">
              {description}
            </p>
            <ul className="space-y-2 text-gray-700">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center">
                  <img
                    src="/svg/tic-vector.svg"
                    alt="tick"
                    className="h-5 w-5 mr-3 text-[#F54E00]"
                  />
                  {advantage}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`flex items-center justify-center ${
              isImgLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative w-full max-w-[549px] h-auto">
              <img
                src={img}
                alt={title}
                className="w-full h-auto max-h-[339px] object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextLayout;
