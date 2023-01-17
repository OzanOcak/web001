import Image from "next/image";
import Button from "../components/Button";
import img from "../public/images/hero.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-3 py-5  bg-neutral-0 lg:py-10 mb-0 md:mb-[11rem] lg:mb-0">
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
            I am a web designer and software engineer
          </h3>
          <p className="text-gray-800 mb-8"></p>
          <div className="-mt-[2rem] -ml-[rem]">
            <Link href="/contact" scroll={false}>
              <Button className="bg-blue-600 text-white px-6  mt-4 md:mt-8">
                Contact Me!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
