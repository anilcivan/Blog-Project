import { Inter } from "next/font/google";
import styles from "./styles.module.css";
import "../styles/global.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Project",
  description: "blog test case",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
    </html>
  );
}
