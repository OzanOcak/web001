import "../styles/globals.css";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Providers from "../components/Providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-white dark:gray-800 duration-1000 ease-linear max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        <Providers>
          <div>
            <Header />
            <div>{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
