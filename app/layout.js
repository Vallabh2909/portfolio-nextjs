import { Bricolage_Grotesque } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import Navbar from "@/components/component/navbar";
import Footer from "@/components/component/footer";

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "700"], // Add the weights you want to use
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> Vallabh Wasule&apos;s Portfolio</title>
        <meta
          name="google-site-verification"
          content="NINMTEkBWGJuiuF9mpzOTAHN9iWKMdNyLmVaNFyZ9ZI"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="description" content="Vallabh Wasule - 3rd-year student at VIT Pune. Aspiring backend engineer with a focus on DevOps and cloud solutions. Passionate about building scalable and reliable applications. Explore my projects, skills, and experiences." />

      </head>
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
