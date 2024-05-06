import { FC } from "react";
import { generateImageUrl } from "../../../../utils/utils";
import { Card } from "flowbite-react";
interface PokemonCardProps {
  name: string;
  id: number;
  onClick?: () => void;
}
const PokemonCard: FC<PokemonCardProps> = ({ name, id, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className="max-w-[291px] w-full p-3  rounded-md flex flex-col hover:scale-105  transition-all cursor-pointer"
      imgAlt={`Pokemon ${name}`}
      imgSrc={generateImageUrl(id)}
    >
      <h5 className="text-2xl font-bold text-center tracking-tight al text-gray-400 dark:text-white capitalize">
        {name}
      </h5>
    </Card>
  );
};

export default PokemonCard;
