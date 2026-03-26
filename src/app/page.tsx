import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/section/Page-Principale/Hero";
import Services from "../components/section/Page-Principale/Services";
import MainPage from "./Page/Main-Page/Main-Page";

export default function Home() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}