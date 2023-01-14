import Image from "next/image";
import Button from "../components/Button";
import img from "../public/images/hero.svg";

const Hero = () => {
  return (
    <section className="px-3 py-5 bg-neutral-0 lg:py-10">
      <div className="grid lg:grid-cols-2  mt-[0rem] sm:mt-[4rem] md:mt-[10rem] justify-items-center h-screen gap-5">
        <div className="relative h-80 w-full overflow-hidden object-cover rounded-lg  bg-gray-100 mt-[6rem] sm:mt-[2rem] md:mt-0">
          <Image
            src={img}
            fill
            priority={true}
            alt="logo"
            sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
          />
        </div>
        <div className="">
          <h1 className="text-6xl sm:text-7xl font-bold">Hi I'm Ozan</h1>
          <h3 className="text-4xl my-3">
            I am software developer and web designer
          </h3>
          <p className="text-gray-800 mb-8">
            this is my new website and I am still working on it, by Friday it
            should have been done
          </p>
          <div className="-mt-[2rem] -ml-[rem]">
            <Button className="bg-blue-600 text-white px-6  mt-2">
              Contact Me!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
