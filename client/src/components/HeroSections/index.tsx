interface IHeroSectionsProps {}
import { classNames } from "@/utils/utils";
import Image from "next/image";
import CircleBox from "../CircleBox";

const data = [
  {
    id: 1,
    name: "",
    imageURL:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
  },
  {
    id: 2,
    name: "",
    imageURL:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
  },
  {
    id: 3,
    name: "",
    imageURL:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
  },
  {
    id: 4,
    name: "",
    imageURL:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
  },
  {
    id: 5,
    name: "",
    imageURL:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
  },
  {
    id: 6,
    name: "",
    imageURL:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
  },
];

const HeroSections: React.FC<IHeroSectionsProps> = (props) => {
  return (
    <div className="relative h-full">
      <div className="md:pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
            <div>
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>

          <div className="border mt-40 md:mt-0 md:mr-20">
            <CircleBox data={data}></CircleBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
