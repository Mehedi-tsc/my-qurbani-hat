
import heroImg from '@/asset/heroBackground.png'
import Link from 'next/link';
const HeroSection = () => {
  
    return (
       <div
  className="hero min-h-screen"
  style={{
    backgroundImage:`url(${heroImg.src})`,
  }}
>
  <div className="hero-overlay "></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Safe Qurbani</h1>
      <p className="mb-5">
        View all animals with guaranteed hygienic and Shariah-compliant Qurbani service
      </p>
      <Link href={'/all-animals'}><button className="btn btn-primary rounded-2xl">Explore Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default HeroSection;