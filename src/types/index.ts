export interface AbilitySlot {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Moves {
  move: {
    name: string;
    url: string;
  };
}
export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export interface PokemonResponse {
  abilities: AbilitySlot;
  base_experience: number;
  name: string;
  forms: {
    name: string;
    url: string;
  }[];

  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
  types: Types[];
  moves: Moves[];
  sprites: {
    front_shiny: string;
  };
}
export interface PokemonListItem {
  name: string;
  url: string;
}
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonTypesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}
