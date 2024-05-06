import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import {
  PokemonListResponse,
  PokemonResponse,
  PokemonTypesResponse,
} from "../types";

export const api = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListResponse, string>({
      query: (limit) => ({ url: `/pokemon?limit=${limit}`, method: "get" }),
    }),
    getPokemonByName: builder.query<PokemonResponse, string>({
      query: (name) => ({ url: `/pokemon/${name}`, method: "get" }),
    }),
    getPokemonTypes: builder.query<PokemonTypesResponse, string>({
      query: () => ({ url: `/type?limit=100000&offset=0`, method: "get" }),
    }),
  }),
});

export const {
  useGetPokemonListQuery,
  useGetPokemonByNameQuery,
  useGetPokemonTypesQuery,
} = api;
