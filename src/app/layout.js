import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { ThemeProvider } from "../../Context/Themecontext";
import { link } from "../component/Navbar/Navbar";
import { config } from "dotenv";
config();
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'NewOne',
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
