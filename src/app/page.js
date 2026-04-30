import FeaturedAnimal from "@/components/homepage/FeaturedAnimal";
import HeroSection from "@/components/homepage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedAnimal></FeaturedAnimal>
    </div>
  );
}
