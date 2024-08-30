import { Cmtr } from "./Cmtr";
import { User } from "./User";

export class Post {
    idPost!: number;
    descpost!: string;
    datecreation!: string;  // LocalDate sera représenté par une chaîne en TypeScript
    imagepost!: string;
    likes!: number;
    dislikes!: number;
    user!: User;  // Assurez-vous d'avoir une classe User correspondante
    comments!: Cmtr[];  // Assurez-vous d'avoir une classe Comment correspondante
  }
  