export type Pokemon = {
  name: string
  url: string
  image: string
}

export type Stats = {
  baseStat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export type Abilities = {
  name: string
  url: string
}

export type PokemonDetail = {
  name: string
  image: string
  experience: number
  height: number
  weight: number
  stats: Stats[]
  abilities: Abilities[]
  types: string[]
}

export type Owners = {
  name: string
  url: string
}

export type AbilityDetail = {
  name: string
  effect: string
  generation: string
  owners: Owners[]
}

export interface PokemonsStore {
  pokemons: Pokemon[] | null
  loading: boolean
  error: null | string
  count: number | null
  next: string | null
  previous: string | null
  detail: PokemonDetail | null
  abilityDetail: AbilityDetail | null
}
