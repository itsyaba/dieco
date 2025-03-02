import { cn } from "@/lib/utils";
import CEO from "@/assets/ceo.jpg"
import BlurText from "../ui/BlurText/BlurText";
const AboutSection = () => {
  return (
    <div className="flex items-center justify-evenly text-darkish max-w-5xl mx-auto my-12 h-[75vh]" id="team">
      <div className="w-3/6">
        {/* <h1 className="">MEET OUR CHAIRMAN</h1> */}
        <BlurText
          text="MEET OUR CHAIRMAN"
          className="text-4xl font-bold italic text-darkish "
          delay={90}
          animateBy="words"
          direction="top"
        />

        <p className="text-md mt-8">
          As respected leaders within our community, our Chiefs uphold
          traditional values, customs, and cultural heritage while providing
          guidance and support to DIDECO North America. They serve as
          ambassadors of our community's rich heritage and traditions, fostering
          unity, solidarity, and pride among our members. Get to know our Chiefs
          and their contributions to preserving and promoting our cultural
          identity.
        </p>
      </div>
      <div className="max-w-xs w-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
            // Preload hover image by setting it in a pseudo-element
            "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
          style={{
            background: `url(${CEO})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default AboutSection