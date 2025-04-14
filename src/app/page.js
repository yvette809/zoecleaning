import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Hero from "./components/Hero";
import cleaningpic from "../assets/images/cleaningpic.jpg";
import SocialMedia from "./components/SocialMedia";

export default function Home() {
  return (
    <>
      <Hero
        title="Zoe Cleaning AB"
        subtitle="Vi städar så du slipper"
        backgroundImage={cleaningpic}
      />
      <Services />
      <AboutUs />
      <ContactUs />
      <SocialMedia />
    </>
  );
}
