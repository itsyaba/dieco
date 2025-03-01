import Blog from "@/components/Blog"
import Img from "@/assets/news-13.jpg"
import Img2 from "@/assets/news-14.jpg"
import Img3 from "@/assets/news-15.jpg"
import BlurText from "../ui/BlurText/BlurText"
import SplitText from "../ui/SplitText/SplitText"

const BlogSection = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between flex-col text-darkish text-center my-12">
        <BlurText
          text="News & Articles"
          className="text-xl font-bold italic text-darkish/60 flex items-center justify-center flex-row"
          delay={90}
          animateBy="words"
          direction="top"
        />

        <SplitText
          text="Directlty from the latest news and articles"
          delay={30}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
          className="text-4xl max-w-xl font-extrabold text-darkish "
        />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 items-center place-items-center max-w-6xl mx-auto">
        <Blog
          title="A Short Guide To talk about latin america"
          desc="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque sit voluptatem accusantium doloremque sit voluptatem accusantium accusantium…"
          img={Img}
          date="May 19,2017"
          name="admin"
        />
        <Blog
          title="Help us to create shelter for homless childrean"
          desc="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque sit voluptatem accusantium doloremque sit voluptatem accusantium accusantium…"
          img={Img2}
          date="May 19,2017"
          name="admin"
        />
        <Blog
          title="How does the bible define poverty?"
          desc="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque sit voluptatem accusantium doloremque sit voluptatem accusantium accusantium…"
          img={Img3}
          date="May 19,2017"
          name="admin"
        />
        <Blog
          title="Help us to create shelter for homless childrean"
          desc="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque sit voluptatem accusantium doloremque sit voluptatem accusantium accusantium…"
          img={Img2}
          date="May 19,2017"
          name="admin"
        />
        <Blog
          title="How does the bible define poverty?"
          desc="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque sit voluptatem accusantium doloremque sit voluptatem accusantium accusantium…"
          img={Img3}
          date="May 19,2017"
          name="admin"
        />

        <Blog
          title="A Short Guide To talk about latin america"
          desc="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque sit voluptatem accusantium doloremque sit voluptatem accusantium accusantium…"
          img={Img}
          date="May 19,2017"
          name="admin"
        />
      </div>
    </div>
  );
}

export default BlogSection