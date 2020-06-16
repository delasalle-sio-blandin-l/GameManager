import { Category } from '../game-list-filter/category';
import { Editor } from '../game-list-filter/editor';

// Point commun des différents jeux
interface GameBase {
  id: number;
  
  name: string;
  
  description: string;

  image: string;

  /** Note/10. */
  note: number;
}

// Récupère la catégorie et l'éditeur d'un jeu sous forme de string
export interface Game extends GameBase {
  genres: Category[];
  editor: Editor;
}

// Récupère la catégorie et l'éditeur d'un jeu sous forme d'entier
export interface GameDTO extends GameBase {
  genres: number[];
  publisher: number;
}