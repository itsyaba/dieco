import { Dot } from "lucide-react";
import { Fragment } from "react";

const words = ["Let's help each other"];

export const TapeSection = () => {
  return (
    <div className="py-16  lg:py-16 overflow-x-clip">
      <div className=" bg-gradient-to-r from-greenish/60 to-greenish/60  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(12)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-xl md:text-3xl">
                      {word}
                    </span>
                    <Dot className=" text-gray-900 " />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
