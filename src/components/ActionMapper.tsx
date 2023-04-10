import { activityData } from "../types";

interface ActionMapperProps {
  data: activityData;
}
export const ActionMapper: React.FC<ActionMapperProps> = ({ data }) => {
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
