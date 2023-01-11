import Image from "next/image";
import img from "../../public/images/toronto2.svg";


const About = () => {
    return(
    <div
      className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-black dark:text-white rounded-lg shadow-lg">
      <div className="flex flex-col justify-between sm:justify-start">
        <div className="flex flex-col  items-center sm:items-start">
          <h2 className="text-2xl sm: text-4x lg:text-5xl font-bold leading-tight mb-2">Lets talk about everything!</h2>
          <div className="relative group h-[30rem] w-[20rem]  overflow-hidden object-cover rounded-lg grayscale-60 ">
          
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-green-200 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-l from-red-100 to-green-200 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Image
            src={img}
            fill
            priority={true}
            alt="logo"
            sizes="width:5wv,
                   height:10wv"
            
          />
          </div>
        </div>
        <div className="mt-8 text-center">
     
        </div>
      </div>
      <div className="flex flex-col justify-center sm:justify-end sm:mb-[2rem]">
        <div>
          <span className="uppercase text-sm text-gray-600 dark:text-white font-bold">Full Name</span>
          <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:ring-2 focus:shadow-outline"
            type="text" placeholder=""/>
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600  dark:text-white font-bold">Email</span>
          <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:ring-2 focus:shadow-outline "
            type="text"/>
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600  dark:text-white font-bold">Message</span>
          <textarea
            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:ring-2 focus:shadow-outline"></textarea>
        </div>
        <div className="mt-8">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-blue-400 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </div>
      </div>
    </div>
    )
}
export default About;