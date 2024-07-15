import BackgroundImage from "@/assets/images/Background.png";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-50">
      <Image
        src={BackgroundImage}
        alt="Background Image"
        className="absolute inset-0 m-auto rotate-[15deg] 
          opacity-50 blur-[2px]"
      />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gray" />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="absolute inset-0 flex items-center justify-center
        bg-background dark:bg-grid-white/[0.2] bg-grid-black/[0.2]
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 
          flex items-center justify-center bg-background
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
    </div>
  );
};

export default Background;
