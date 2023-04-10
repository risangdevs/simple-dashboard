import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { activity } from "../types";
import { ActivityTimeline } from "./ActivityTimeline";
interface ActivityOverviewProps {
  activity: activity;
}
export const ActivityOverview: React.FC<ActivityOverviewProps> = ({
  activity,
}) => {
  return (
    <div className="h-[600px] w-1/3 px-4 rounded-lg space-y-2 bg-[#1C243F]">
      <h3 className="text-[#D3D3D3] font-bold text-sm mt-4">
        Activity Overview
      </h3>
      <div className="flex space-x-2 items-center">
        <div className="w-4 h-4">
          {activity.trend === "increase" ? (
            <ArrowUpIcon color="green" />
          ) : (
            <ArrowDownIcon color="red" />
          )}
        </div>
        <span className="text-white text-sm">
          {activity.trendValue} this month
        </span>
      </div>
      <div>
        {activity &&
          activity.data &&
          activity.data.map((e, i) => <ActivityTimeline data={e} key={i} />)}
      </div>
    </div>
  );
};
