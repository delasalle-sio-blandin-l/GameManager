import { Category } from '../game-list-filter/category';

export interface Game {
    id: number;
  
    name: string;
  
    description: string;
  
    editor: string;
  
    image: string;
  
    /** Note/10. */
    note: number;
  }

  export interface GameCategory extends Game {
    genres: Category[];
  }
  
  export interface GameDTO extends Game{
    genres: number[];
  }