import { Computer, Network } from "lucide-react";
import { FaBusinessTime } from "react-icons/fa";
import { OrbitingCirclesComponent } from "./orbiting-circles";
import { TITLE_TAILWIND_CLASS } from "@/utils/constants";

const features = [
  {
    name: "Brainstorm Faster.",
    description:
      " Get your ideas flowing in no time with our intuitive interface and pre-defined content types. Say goodbye to scattered notes and focus on what truly matters - creating great content.",
    icon: Computer,
  },
  {
    name: "Focus on Creativity.",
    description:
      "Concentrate on developing compelling content instead of getting bogged down in process management and tracking.",
    icon: FaBusinessTime,
  },
  {
    name: "Ready for scale.",
    description:
      "Prepare for growth from day one. With built-in collaboration tools and a scalable workflow, your content operation will be ready to handle increased output and complexity.",
    icon: Network,
  },
];

export default function SideBySide() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p
                className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight text-gray-900 dark:text-white`}
              >
                A Faster Way to Publish
              </p>
              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                Accelerate your content creation with this powerful idea
                management platform
              </p>
              <dl className="mt-10 max-w-xl space-y-8 leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-gray-100">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline dark:text-gray-400">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <OrbitingCirclesComponent />
        </div>
      </div>
    </div>
  );
}
