import { useParams } from "react-router";
import BaseLayout from "../components/Layout/BaseLayout";
import { useGetPokemonByNameQuery } from "../services/services";
import { Link } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";

const PokemonDetails = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetPokemonByNameQuery(name || "", {});
  return (
    <BaseLayout>
      <div className="container mx-auto p-4">
        {isLoading ? (
          <div className="w-full flex justify-center items-center h-screen">
            <Spinner size="xl" />
          </div>
        ) : (
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-600 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-4 dark:bg-gray-800">
              <h2 className="text-2xl font-bold dark:text-white">{name}</h2>
            </div>
            <div className="p-4">
              <img
                src={data?.sprites.front_shiny}
                alt={name}
                className="mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold dark:text-white">
                Moves:
              </h3>
              <ul className="list-disc pl-6">
                {data?.moves.map(({ move }, index) => (
                  <li key={index} className="text-gray-800 dark:text-white">
                    {move.name}
                  </li>
                ))}
              </ul>
              <h3 className="mt-4 text-lg font-semibold">Types:</h3>
              <ul className="list-disc pl-6">
                {data?.types.map(({ type }, index) => (
                  <li
                    key={index}
                    className="text-blue-600 dark:text-zinc-900 hover:underline"
                  >
                    <Link to={`/?type=${type.name}`}>{type.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center pb-5">
              <Button>
                <Link to="/" className="">
                  Back to Pokemon List
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default PokemonDetails;
