import { activityData } from "../types";

interface ActivityTimelineProps {
  data: activityData;
}
interface ActionMapperProps {
  data: activityData;
}
const ActionMapper: React.FC<ActionMapperProps> = ({ data }) => {
  switch (data.action) {
    case "mentioned":
      return (
        <p className="font-normal text-white text-xs">
          <span className="font-semibold text-white text-xs">{data.actor}</span>{" "}
          Mentioned{" "}
          <span className="font-semibold text-white text-xs">
            {data.object}
          </span>{" "}
          In New Post
        </p>
      );
    case "subscribed":
      return (
        <p className="font-normal text-white text-xs">
          <span className="font-semibold text-white text-xs">{data.actor}</span>{" "}
          have subscribed to{" "}
          <span className="font-normal text-white text-xs">{data.object}</span>
        </p>
      );
    case "published":
      return (
        <p className="font-normal text-white text-xs">
          <span className="font-semibold text-white text-xs">{data.actor}</span>{" "}
          Published a{" "}
          <span className="font-normal text-white text-xs">{data.object}</span>
        </p>
      );
    case "removed":
      return (
        <p className="font-normal text-white text-xs">
          The{" "}
          <span className="font-semibold text-white text-xs">
            {data.object}
          </span>{" "}
          was Removed by{" "}
          <span className="font-semibold text-white text-xs">{data.actor}</span>
        </p>
      );
    case "suspended":
      return (
        <p className="font-normal text-white text-xs">
          The{" "}
          <span className="font-semibold text-white text-xs">
            {data.object}
          </span>{" "}
          was Suspended by{" "}
          <span className="font-semibold text-white text-xs">{data.actor}</span>
        </p>
      );
    default:
      return <p></p>;
  }
};
export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ data }) => {
  return (
    <div className="flex">
      <div className="w-5">
        <div className="border-[#FF814A] bg-[#1C243F] z-50 border-2 w-5 h-5 rounded-full" />
        <div className="bg-[#5C6CA5] w-1 h-20 mx-auto" />
      </div>
      <div className="px-4">
        <ActionMapper data={data} />
        <p className="text-xs text-[#9F9F9F] font-thin">{data.at}</p>
      </div>
    </div>
  );
};
