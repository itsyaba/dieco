/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react";
import AnimateTitle from "../AnimateTitle";

export function FeaturesSection() {
  return (
    <div className="py-20">
        <AnimateTitle title="Our Goal" />
      <div className="flex itesm-center justify-evenly flex-row gap-10 md:gap-2 max-w-7xl mx-auto ">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b  from-darkish dark:to-darkish/90 to-white p-6 rounded-3xl overflow-hidden  "
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Vission",
    description:
      "We envision a future where every member of our community has access to opportunities for growth, empowerment, and meaningful engagement, both in North America and back home in Cameroon.",
  },
  {
    title: "Mission",
    description:
      "Our mission is to serve as a catalyst for positive change within the Dikome Balue community, empowering individuals, fostering unity, and advocating for the collective interests of our people.",
  },

  {
    title: "Core Values",
    description:
      "Our core values of Cultural Preservation, Collaboration, Inclusivity, Transparency & Accountability guide our actions, decisions, and interactions as we work towards realizing our vision and fulfilling our mission.",
  },

];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)] ">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-greenish/60 from-zinc-100 to-zinc-300/30 dark:to-zinc-200 opacity-100 bg-green-900">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="90"
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="40"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
