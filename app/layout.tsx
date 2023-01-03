
import "../styles/globals.css";
import Header from "../sections/Header";
import Footer from "../sections/Footer"
import Providers from "../components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html>
      <body className="mx-auto max-w-[56rem] px-6">
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
