import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Spotlight } from "@/components/ui/Spotlight";

const Hero = () => {
  // const { theme, setTheme } = useTheme();

  return (
    <div className="pb-20 pt-36">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gray" />
      <div className="flex justify-center">
        <div className="max-w-[89vw]">
          <h2>Hello</h2>
        </div>
      </div>
      <ThemeSwitcher />

      <div
        className="h-screen w-full bg-background 
        dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex
        items-center justify-center"
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

export default Hero;
