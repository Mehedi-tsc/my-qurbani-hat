import FeaturedAnimal from "@/components/homepage/FeaturedAnimal";
import HeroSection from "@/components/homepage/HeroSection";
import TipsSection from "@/components/homepage/TipsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedAnimal></FeaturedAnimal>
      <TipsSection></TipsSection>
    </div>
  );
}
