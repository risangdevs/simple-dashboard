import { cardData } from "../types";
import { formatMoney } from "../utils/formatMoney";

interface CardProps {
  data: cardData;
}
export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="bg-[#1C243F] rounded-lg hover:bg-[#0BB885] hover:text-white text-[#6C747D] flex flex-row w-[205px] h-[100px] py-5 pl-5 space-x-4">
      <div className="bg-[#0BB885] text-white w-8 h-8 flex justify-center items-center my-auto rounded-md">
        {data.icon}
      </div>
      <div className="items-center my-auto">
        {data.label === "Last Payment" ? (
          <>
            <p className="">{formatMoney(data.value)}</p>
            <h4 className="text-white">{data.label}</h4>
          </>
        ) : (
          <>
            <h4 className="text-white">{data.label}</h4>
            <p className="">
              {data.label === "Revenue"
                ? formatMoney(data.value / 1000) + "K"
                : formatMoney(data.value)}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
