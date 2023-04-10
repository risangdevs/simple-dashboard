import { activityData } from "../types";
import { ActionMapper } from "./ActionMapper";

interface ActivityTimelineProps {
  data: activityData;
}

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
