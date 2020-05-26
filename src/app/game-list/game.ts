import { Category } from '../game-list-filter/category';
import { Editor } from '../game-list-filter/editor';

export interface Game {
    id: number;
  
    name: string;
  
    description: string;
  
    image: string;
  
    /** Note/10. */
    note: number;
  }

  export interface GameCategory extends Game {
    genres: Category[];
  }

  export interface GameEditor extends Game {
    publisher: Editor[];
  }
  
  export interface GameDTO extends Game{
    genres: number[];
  }