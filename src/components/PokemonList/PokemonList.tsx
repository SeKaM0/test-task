import { useEffect, useState } from "react";
import {
  useGetPokemonListQuery,
  useGetPokemonTypesQuery,
} from "../../services/services";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import Search from "./components/Search/Search";
import { PokemonListItem } from "../../types";
import useInfiniteScroll from "./hooks/useInfinityScroll";
import { useNavigate, useSearchParams } from "react-router-dom";
import CustomSelect from "./components/Select/CustomSelect";

const PokemonList = () => {
  const [searchData, setSearchData] = useState<PokemonListItem[]>([]);
  const [limit, setLimit] = useState(20);
  const [searchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState(
    searchParams.get("type") || ""
  );

  useEffect(() => {
    searchData.filter((pokemon) => pokemon);
  }, [selectedType]);
  const { data: types } = useGetPokemonTypesQuery("", {});
  const { data, isSuccess } = useGetPokemonListQuery(`${limit}`, {});
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (value: string) => {
    setQuery(value);
  };

  const loadMoreData = () => {
    setLimit((prevLimit) => prevLimit + 20);
  };

  useInfiniteScroll(loadMoreData, !!data?.next);

  useEffect(() => {
    const results = data?.results || [];
    setSearchData(results.filter((pokemon) => pokemon.name.includes(query)));

    if (
      searchData.some(
        (pokemon) => pokemon.name.toLowerCase() === query.toLowerCase()
      )
    ) {
      navigate(`/pokemon/${query}`);
    }
  }, [data, query, isSuccess]);

  return (
    <div className="w-full max-w-screen-xl m-auto px-8 py-6 min-h-screen">
      <div className="flex justify-between w-full items-center">
        <Search value={query} onSearch={handleSearch} />
        <CustomSelect
          value={selectedType}
          onChange={setSelectedType}
          options={types?.results.map((type) => type.name) || []}
        />
      </div>

      <div className="w-full  flex flex-wrap justify-center  gap-4 py-6">
        {searchData.length > 0 ? (
          searchData.map((pokemon, index) => (
            <PokemonCard
              key={pokemon.name}
              onClick={() => navigate(`/pokemon/${pokemon.name}`)}
              name={pokemon.name}
              id={index + 1}
            />
          ))
        ) : (
          <div className="flex justify-center items-center mt-48">
            <h1 className="dark:text-white text-3xl ">No results found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
