import Image from "next/image";
import Button from "../components/Button";
import img from "../public/images/img.webp";

const Hero = () => {
  return (
    <section className=" px-3 py-5 bg-neutral-0 lg:py-10">
      <div className="grid lg:grid-cols-2 items-center justify-items-center h-screen gap-5">
        <div className="relative h-80 w-full overflow-hidden object-cover rounded-lg">
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
          <h1 className="text-7xl font-bold">Hi I'm Ozan</h1>
          <h3 className="text-4xl my-3">I am softare developer amd designer</h3>
          <p className="text-gray-800 mb-8">
            werhgfejrgnhvjnkdfjg ekrhgnjvsedfkngklfdn l;kjdrgnflekdfng
          </p>
          <Button className="bg-blue-600 text-white px-6">Hire Me!</Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
