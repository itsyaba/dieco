import BlurText from "@/components/ui/BlurText/BlurText";
import SplitText from "./ui/SplitText/SplitText";

type Props = {
  title: string;
  subtitle?: string;
};

const AnimateTitle = (props: Props) => {
  return (
    <div className=" text-center mx-auto max-w-4xl my-8 flex items-center justify-between flex-col gap-8">
      <SplitText
        text={props.title}
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        threshold={0.2}
        rootMargin="-50px"
        className="text-5xl font-extrabold text-darkish "
      />
      <BlurText
        text={props?.subtitle}
        className="text-xl font-bold italic text-darkish/60 flex items-center justify-center flex-row"
        delay={90}
        animateBy="words"
        direction="top"
      />
    </div>
  );
};

export default AnimateTitle;
