import "./globals.css";
import { manrope } from "./font";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} box-border	 px-9 md:px-12 py-6 md:py-8 bg-[#fff9f9] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
