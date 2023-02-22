import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiMicrodotblog } from "react-icons/si";
const CV = () => {
  return (
    <div className="flex flex-col items-center px-3  md:flex-row gap-x-10 mt-10">
      <div className="justify-start w-2/6">
        <strong className="text-xl font-medium">Ozan Ocak</strong>

        <ul className="mt-2 mb-10">
          <li className="px-2 mt-1">
            <strong className="mr-1">Location</strong>
            <span className="block">Toronto,Canada</span>
          </li>
        </ul>

        <ul className="flex w-full mt-2 mb-10 gap-x-[2rem]">
          <li className="text-2xl ">
            <a href="https://www.github.com/ozanocak">
              <BsGithub />
            </a>
          </li>
          <li className="text-2xl ">
            <a href="https://www.linkedin.com/in/ozanocak/">
              <BsLinkedin />
            </a>
          </li>
          <li className="text-2xl ">
            <a href="https://ozanocak.github.io/">
              <SiMicrodotblog />
            </a>
          </li>
        </ul>

        <strong className="text-xl font-medium">Skills</strong>
        <ul className="mt-2 mb-10">
          <li className="px-2 mt-1">JavaScript</li>
          <li className="px-2 mt-1">TypeScript</li>
          <li className="px-2 mt-1">CSS & SASS & Tailwind</li>
          <li className="px-2 mt-1">React</li>
          <li className="px-2 mt-1">Node.js</li>
          <li className="px-2 mt-1">Next.js</li>
          <li className="px-2 mt-1">C</li>
          <li className="px-2 mt-1">Docker</li>
          <li className="px-2 mt-1">SQL & NoSQL</li>
        </ul>
      </div>

      <div className=" w-full sm:w-4/6">
        <section>
          <h2 className="text-2xl pb-1 border-b font-semibold">About</h2>
          <p className="mt-4 text-xs">
            Hi, My name is Ozan Ocak, Experienced front-end developer with 6+
            years of experience designing and building responsive web
            applications using HTML,CSS, JavaScript, PHP, C#. I am also skilled
            in Software Development Life Cycle and JavaScript Frameworks,
            additionally I have good knowledge of C, JavaScript, browsers,
            Docker, network communication, operating systems and programming
            paradigms such as object-oriented and functional programming.
          </p>
        </section>
        <section>
          <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
            Projects
          </h2>
          <ul className="mt-1">
            <li className="py-2">
              <div className="flex justify-between my-1">
                <strong>March of Dimes Canada</strong>
                <p className="flex flex-wrap">
                  <span className="bg-gray-600 max-h-[1.4rem] text-white px-2 py-1 ml-1 text-xs rounded">
                    JavaScript
                  </span>
                  <span className="bg-gray-600 max-h-[1.4rem] text-white px-2 py-1 ml-1 text-xs rounded">
                    React.JS
                  </span>
                  <span className="bg-gray-600 max-h-[1.4rem] text-white px-2 py-1 ml-1 text-xs rounded">
                    CSS
                  </span>
                  <span className="bg-gray-600 max-h-[1.4rem] text-white px-2 py-1 ml-1 text-xs rounded">
                    SharePoint
                  </span>
                </p>
              </div>
              <ul className="flex mb-2">
                <li>
                  <a
                    href="https://www.marchofdimes.ca/en-ca"
                    className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded hover:bg-blue-900"
                  >
                    Live
                  </a>
                </li>
                <li>
                  <button
                    href="#"
                    disabled={true}
                    className="bg-blue-600 text-white px-2 py-[.2rem] mr-1 text-sm rounded  disabled:bg-blue-200"
                  >
                    Code
                  </button>
                </li>
              </ul>
              <p className="text-xs">
                Have designed initial apperance of the web application, worked
                on intigration to the SharePoint environtment and made it
                accesiable for everyone. I have developed navigation and other
                functionality with vanilla JavScript. I have created SharePonit
                Components with vanilla JavaScript.
              </p>
            </li>
            <li className="py-2">
              <div className="flex justify-between my-1">
                <strong>MODC Employment Service</strong>
                <p className="flex flex-wrap">
                  <span className="bg-gray-600 max-h-[1.4rem] text-white px-2 py-1 ml-1 text-xs rounded">
                    JavaScript
                  </span>
                  <span className="bg-gray-600 max-h-[1.4rem] text-white px-2 py-1 ml-1 text-xs rounded">
                    PHP
                  </span>
                  <span className="bg-gray-600 max-h-[1.4rem] text-white px-2 py-1 ml-1 text-xs rounded">
                    CSS
                  </span>
                  <span className="bg-gray-600 max-h-[1.4rem] text-white px-2 py-1 ml-1 text-xs rounded">
                    WordPress
                  </span>
                  <span className="bg-gray-600 max-h-[1.4rem] text-white px-2 py-1 ml-1 text-xs rounded">
                    Docker
                  </span>
                </p>
              </div>
              <ul className="flex mb-2">
                <li>
                  <a
                    href="http://www.modcemploymentservices.ca/"
                    className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded hover:bg-blue-900"
                  >
                    Live
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    disabled={true}
                    className="bg-blue-200 text-white px-2 py-1 mr-1 text-sm rounded disabled:bg-blue-200"
                  >
                    Code
                  </a>
                </li>
              </ul>
              <p className="text-xs">
                Have set up docker environment consist of MySQL and WordPress
                and maintained. designed custom WordPress framework with HTML,
                CSS, JavaScript and PHP.
              </p>
            </li>
            {/*      <li className="py-2">
              <div className="flex justify-between my-1">
                <strong>Blog Website</strong>
                <p className="flex">
                  <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    HTML
                  </span>
                  <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    CSS
                  </span>
                  <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    React
                  </span>
                  <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    Next.js
                  </span>
                </p>
              </div>
              <ul className="flex mb-2">
                <li>
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                  >
                    Live
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                  >
                    Code
                  </a>
                </li>
              </ul>
              <p className="text-xs">
                Have built React web app in the front-end,have used Next.js in
                the back-end and extended its API as it is needed. Have designed
                presentation with Tailwind CSS.
              </p>
            </li> */}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
            Work Experience
          </h2>
          <ul className="mt-2">
            {/*---------------------------------------*/}
            <li className="pt-2">
              <p className="flex justify-between text-sm">
                <strong className="text-base">March of Dimes of Canada</strong>
                09.2015-12.2021
              </p>
              <p className="flex justify-between text-base mb-2">
                Front-End Wed Developer<small>Toronto</small>
              </p>
              <ul className=" text-xs">
                <li className="mb-[.2rem]">
                  Developed WordPress theme with HTML5, CSS3, SASS, bootstrap,
                  JavaScript and PHP for back-end set-up.
                </li>
                <li className="mb-[.2rem]">
                  Daily maintenance of code and debugging issues and
                  collaborating with UX/UI team.
                </li>
                <li className="mb-[.2rem]">
                  Used OS-level virtualization with Docker for increasing
                  efficiency and portability.
                </li>
                <li className="mb-[.2rem]">
                  Developed ASP.NET forms for the SharePoint hosted web apps.
                </li>
                <li className="mb-[.2rem]">
                  Daily maintenance of code, debugging issues.
                </li>
                <li className="mb-[.2rem]">
                  Developed a responsive front-end framework and theme with
                  JavaScript, jQuery, HTML5 and CSS.
                </li>
                <li className="mb-[.2rem]">
                  Practiced agile work and version control in SharePoint
                  platform.
                </li>
                <li className="mb-[.2rem]">
                  Developed web applications with React.js
                </li>
                <li className="mb-[.2rem]">
                  Developed full-stack applications with Node.js and Next.js
                </li>
                <li className="mb-[.2rem]">
                  Experience with Express.js by using mongoose or prisma
                  libraries.
                </li>
                <li className="mb-[.2rem]">
                  Utilizing CSS skills by using Tailwind css, designing mobile
                  first responsive design.
                </li>
                <li className="mb-[.2rem]">
                  Developed APIs with MVP architecture by using Express.js
                  within Node.js or Next.js
                </li>
                <li className="mb-[.2rem]">
                  <p>
                    Experienced with Object Data Modelling (ODM with )Mongoose
                    and Object Relational Modelling (ORM) Prisma.
                  </p>
                </li>
                <li className="">
                  Developed databases with NoSQL and as well as SQL including
                  mongodb, postgres, mysql.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-sm mt-6 pb-1 border-b ">Education</h2>
          <ul className="mt-2 ">
            <li className="flex justify-between text-sm pt-2">
              <p>
                Wireless Networking PostGraduate Cretificate(1 year program),
              </p>
              <p className=" text-sm">Toronto, Canada</p>
            </li>
            <li className="flex justify-between text-sm pt-2">
              <p>Computer Engineering BSc Degree,</p>
              <p className=" text-sm">Ankara, Turkey</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
export default CV;
