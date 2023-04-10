import { cardData } from "../types";
import { Card } from "./Card";

interface CardsProps {
  datas: cardData[];
}
export const Cards: React.FC<CardsProps> = ({ datas }) => {
  return (
    <div className="flex flex-wrap justify-around space-x-7  w-full">
      {datas.map((e, i) => (
        <Card data={e} key={i} />
      ))}
    </div>
  );
};
