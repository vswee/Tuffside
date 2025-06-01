import { Inter, Mr_Dafoe } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mrDafoe = Mr_Dafoe({
  variable: "--font-mr-dafoe",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Tuffside Automotive Garage - Built to Last. Tuned to Perform.",
  description: "Professional automotive repair and maintenance services in Trinidad. Expert diagnostics, diesel repair, engine tuning, and suspension work. Call +1 868 335-7440 or book online.",
  keywords: "automotive repair, car service, diesel repair, engine tuning, suspension, Trinidad garage, vehicle maintenance",
  openGraph: {
    title: "Tuffside Automotive Garage",
    description: "Professional automotive repair and maintenance services in Trinidad",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mrDafoe.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
