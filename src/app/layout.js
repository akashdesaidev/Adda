import "./globals.css";
import { manrope } from "./font";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
<<<<<<< HEAD
        className={`${manrope.className} max-w-[100vw] box-border	px-9 md:px-12 py-6 md:py-8 bg-[#fff9f9] xs:overflow-x-hidden`}
=======
        className={`${manrope.className} box-border	 px-9 md:px-12 py-6 md:py-8 bg-[#fff9f9] overflow-x-hidden`}
>>>>>>> 9f7785b38c8ffccb2419e1b7621e960cd48aa7b6
      >
        {children}
      </body>
    </html>
  );
}
