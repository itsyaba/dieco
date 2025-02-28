import AnimateTitle from "@/components/AnimateTitle"
import Blog from "@/components/Blog"
import Img from "@/assets/news-13.jpg"
import Img2 from "@/assets/news-14.jpg"
import Img3 from "@/assets/news-15.jpg"

const BlogSection = () => {
  return (
    <div>
      <AnimateTitle title="Recent Posts" />
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