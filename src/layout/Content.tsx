import { ActivityOverview } from "../components/ActivityOverview";
import { Cards } from "../components/Cards";
import { ChartContainer } from "../components/ChartContainer";
import { Footer } from "../components/Footer";
import { activity } from "../types";

interface ContentProps {
  title: string;
  breadcrumb: string;
}

const datas = [
  {
    label: "Total Cost",
    value: 31868,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    label: "Total Sales",
    value: 66053,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
  {
    label: "This Week",
    value: 35000,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    label: "Revenue",
    value: 63000,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
        />
      </svg>
    ),
  },
  {
    label: "Last Payment",
    value: 1250,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
        />
      </svg>
    ),
  },
];
const footers = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

const activities = {
  trend: "increase",
  trendValue: "16%",
  data: [
    {
      actor: "Nick Mark",
      object: "Sara Smith",
      action: "mentioned",
      at:
        new Date().toLocaleDateString("en-GB", {
          month: "long",
          year: "numeric",
          day: "numeric",
        }) +
        " at " +
        new Date().toLocaleTimeString(),
    },
    {
      actor: "Nick Mark",
      object: "Post Name",
      action: "removed",
      at:
        new Date().toLocaleDateString("en-GB", {
          month: "long",
          year: "numeric",
          day: "numeric",
        }) +
        " at " +
        new Date().toLocaleTimeString(),
    },
    {
      actor: "Patrick Sullivan",
      object: "New Post",
      action: "published",
      at:
        new Date().toLocaleDateString("en-GB", {
          month: "long",
          year: "numeric",
          day: "numeric",
        }) +
        " at " +
        new Date().toLocaleTimeString(),
    },
    {
      actor: "240+ users",
      object: "Newsletter #1",
      action: "subscribed",
      at:
        new Date().toLocaleDateString("en-GB", {
          month: "long",
          year: "numeric",
          day: "numeric",
        }) +
        " at " +
        new Date().toLocaleTimeString(),
    },
    {
      actor: "Nick Mark",
      object: "Post Name #2",
      action: "suspended",
      at:
        new Date().toLocaleDateString("en-GB", {
          month: "long",
          year: "numeric",
          day: "numeric",
        }) +
        " at " +
        new Date().toLocaleTimeString(),
    },
  ],
};
export const Content: React.FC<ContentProps> = ({ title, breadcrumb }) => {
  return (
    <section className="container mx-auto sm:px-6 lg:px-8 py-10 bg-[#151A2E] space-y-8">
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <a href="#" className="text-[#0BB885] font-light text-sm">
        {breadcrumb}
      </a>
      <Cards datas={datas} />
      <div className="container mx-auto flex space-x-7">
        <ChartContainer />
        <ActivityOverview activity={activities} />
      </div>
      <Footer footers={footers} />
    </section>
  );
};
