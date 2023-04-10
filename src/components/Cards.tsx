import { cardData } from "../types";
import { Card } from "./Card";

interface CardsProps {
  datas: cardData[];
}
export const Cards: React.FC<CardsProps> = ({ datas }) => {
  return (
    <div className="flex flex-wrap justify-start space-x-6 py-8">
      {datas.map((e, i) => (
        <Card data={e} key={i} />
      ))}
    </div>
  );
};
