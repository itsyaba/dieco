import { cn } from "@/lib/utils";

type Props = {
  name: string;
  title: string;
  desc: string;
  date: string;
  img: string;
};

const Blog = (props: Props) => {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        style={{
          backgroundImage: `url(${props.img})`,
        }}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover"
          //   `bg-${props.img}` ,
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-darkish opacity-60 bg-gradient-to-t from-darkish via-transparent to-darkish"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <img
            height="100"
            width="100"
            alt="Avatar"
            src={props.img}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10 ">
              {props.name}
            </p>
            <p className="text-sm text-gray-400">{props.date}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-xl text-gray-50 relative z-10 uppercase">
            {props.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
