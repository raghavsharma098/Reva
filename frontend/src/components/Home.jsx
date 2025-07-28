// components/Home.jsx
import Header from "./Header";
import Homehero from "./Homehero";
import WhoCanJoin from "./WhoCanJoin";
import Main from "./Main";
import Cards from "./Cards";
import About from "./About";
import Form1 from "./Form1";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Homehero />
      <WhoCanJoin />
      <Header />
      <Main />
      <Cards />
      <About />
      <Form1 />
      <Footer />
    </>
  );
}
