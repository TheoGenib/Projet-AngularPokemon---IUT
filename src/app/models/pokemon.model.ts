import { StatsModel } from './stats.model';

export interface PokemonModel {
  name: string;
  poke_id: number;
  image: string;
  type: string;
  stats: {
    attack: number;
    hp: number;
    speed: number;
    defense: number;
  };
}
